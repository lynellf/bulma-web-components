const { JSDOM } = require("jsdom")

describe("Bulma Card Web Components Page", () => {
  let htmlString = ""
  /**@type {Window} win */
  let win
  /**@type {Document} doc */
  let doc

  beforeAll(async () => {
    const page = await browser.newPage()
    await page.goto("http://localhost:9000")
    htmlString = await page.content()
    win = new JSDOM(htmlString).window
    doc = win.document
  })

  /**
   * @param {HTMLElement|Element} element
   * @param {number} count
   */
  const getChildren = (element, count) => {
    const children = [...element.children]
    const hasExpectedSize = children.length === count
    return { hasExpectedSize, children }
  }

  /**
   * @param {HTMLElement | Element} element
   * @param {string[]} attributeArray
   */
  const getAttributes = (element, attributeArray) => {
    /**@type {{ [key: string]: string }} */
    const outputObj = {}
    const attributes = attributeArray.reduce((output, attr) => {
      output[attr] = element.getAttribute(attr)
      return output
    }, outputObj)
    return attributes
  }

  it("has card one", () => {
    const cardOne = doc.querySelector('bulma-card[test-id^="cardOne"]')
    const cardOneExists = cardOne !== null
    const computedStyles = win.getComputedStyle(cardOne)
    const cardStyles = {
      'background-color': computedStyles['background-color'],
      'box-shadow': computedStyles['box-shadow'],
      display: computedStyles.display,
      'max-width': computedStyles['max-width'],
      position: computedStyles.position
    }
    const expectedStyles = {
      'background-color': 'rgb(255, 255, 255)',
      'box-shadow':
        '0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)',
      display: 'block',
      'max-width': '100%',
      position: 'relative'
    };
    const hasStyleMatch = JSON.stringify(cardStyles) === JSON.stringify(expectedStyles)
    const hasCardOne = cardOneExists && hasStyleMatch
    expect(hasCardOne).toBe(true)
  })

  it("has a card content component", () => {
    // Assertion Five
    // Card content component is valid
    const cardContentComponent = doc.querySelector(
      'card-content[test-id^="cardContent0"]'
    )
    const cardContentChildren = [...cardContentComponent.children]
    const cardContentDiv = cardContentChildren[0]
    const cardContentDivIsDiv = cardContentDiv.tagName === "DIV"
    const cardContentDivClass = cardContentDiv.className
    const hasValidCardContentClass = cardContentDivClass.includes(
      "card-content"
    )
    const contentComponentIsValid =
      cardContentDivIsDiv && hasValidCardContentClass
    expect(contentComponentIsValid).toBe(true)
  })

  it("has a card image component", () => {
    // Assertion Four
    // Image component is valid
    const cardImageComponent = doc.querySelector(
      'card-image[test-id^="cardImage0"]'
    )
    const imageComponentSrc = cardImageComponent.getAttribute("src")
    const imageComponentDimension = cardImageComponent.getAttribute("dimension")
    const imageComponentAlt = cardImageComponent.getAttribute("alt")
    const cardImageComponentChildren = [...cardImageComponent.children]
    const cardImageFigure = cardImageComponentChildren[0]
    const figureChildren = [...cardImageFigure.children]
    const figureImage = figureChildren[0]
    const imageSrc = figureImage.getAttribute("src")
    const imageAlt = figureImage.getAttribute("alt")
    const figureClassName = cardImageFigure.className
    const hasFigureImage = figureImage !== undefined
    const figureHasImageClass = figureClassName.includes("image")
    const hasImageDimensionMatch = figureClassName.includes(
      imageComponentDimension
    )
    const hasImageSrcMatch = imageComponentSrc === imageSrc
    const hasImageAltMatch = imageComponentAlt === imageAlt
    const imageComponentIsValid =
      hasFigureImage &&
      figureHasImageClass &&
      hasImageDimensionMatch &&
      hasImageSrcMatch &&
      hasImageAltMatch
    expect(imageComponentIsValid).toBe(true)
  })

  it("has a card footer item component containing an a element as its only child element", () => {
    /**@type {HTMLElement} */
    const footerItemComponent = doc.querySelector(
      'card-footer-item[test-id^="cardFooterItem0"]'
    )
    const { hasExpectedSize, children } = getChildren(footerItemComponent, 1)
    const href = footerItemComponent.getAttribute("href")
    const aTag = children.find(node => node.tagName === "A")
    const hasATag = aTag !== undefined
    const aTagHref = aTag.getAttribute("href")
    const hrefMatch = href === aTagHref
    const aTagClassNameMatch = aTag.className.includes("card-footer-item")
    const classNameMatch = footerItemComponent.className.includes(
      "card-footer-item"
    )
    const hasNoPadding = footerItemComponent.style.padding === "0px"
    const componentIsValid =
      hasExpectedSize &&
      hasATag &&
      hrefMatch &&
      classNameMatch &&
      aTagClassNameMatch &&
      hasNoPadding
    expect(componentIsValid).toBe(true)
  })

  it("has a card footer component containing a footer element as its only child element", () => {
    const footerComponent = doc.querySelector(
      'card-footer[test-id^="cardFooter0"]'
    )
    const { hasExpectedSize, children } = getChildren(footerComponent, 1)
    const footerElement = children.find(node => node.tagName === "FOOTER")
    const hasFooterElement = footerElement !== undefined
    const footerClassName = footerElement.className
    const footerClassNameMatch = footerClassName.includes("card-footer")
    const componentIsValid =
      hasExpectedSize && hasFooterElement && footerClassNameMatch
    expect(componentIsValid).toBe(true)
  })

  it("has a card header icon component containing one child with nested elements and proper class names", () => {
    /**@type {HTMLElement} */
    const iconComponent = doc.querySelector(
      'card-header-icon[test-id^="cardHeaderIcon0"]'
    )
    const componentAttributes = [
      "href",
      "aria-hidden",
      "aria-label",
      "icon-class"
    ]
    const componentAriaHidden = "true"
    const componentAriaLabel = "more options"
    const componentHref = "#"
    const componentIconClass = "fas fa-angle-down"
    const {
      "aria-hidden": ariaHidden,
      "aria-label": ariaLabel,
      href,
      "icon-class": iconClass
    } = getAttributes(iconComponent, componentAttributes)

    const hrefMatch = href === componentHref
    const ariaHiddenMatch = ariaHidden === componentAriaHidden
    const ariaLabelMatch = ariaLabel === componentAriaLabel
    const iconClassMatch = componentIconClass === iconClass

    const { hasExpectedSize, children } = getChildren(iconComponent, 1)
    const aTag = children.find(node => node.tagName === "A")
    const hasATag = aTag !== undefined
    const aTagAttributes = ["href", "class", "aria-label"]
    const {
      href: aHref,
      class: aClass,
      "aria-label": aAriaLabel
    } = getAttributes(aTag, aTagAttributes)
    const aHrefMatch = componentHref === aHref
    const aClassMatch = aClass.includes("card-header-icon")
    const aAriaLabelMatch = aAriaLabel === componentAriaLabel
    const {
      hasExpectedSize: aHasExpectedSize,
      children: aChildren
    } = getChildren(aTag, 1)
    const spanTag = aChildren.find(node => node.tagName === "SPAN")
    const hasSpanTag = spanTag !== undefined
    const spanClassName = spanTag.className
    const spanClassMatch = spanClassName.includes("icon")
    const {
      hasExpectedSize: spanHasExpectedSize,
      children: spanChildren
    } = getChildren(spanTag, 1)
    const iconTag = spanChildren.find(node => node.tagName === "I")
    const hasIconTag = iconTag !== undefined
    const iconTagAttributes = ["class", "aria-hidden"]
    const {
      class: iconClassName,
      "aria-hidden": iconAriaHidden
    } = getAttributes(iconTag, iconTagAttributes)
    const hasIconClassMatch = iconClassName === componentIconClass
    const hasIconAriaHiddenMatch = iconAriaHidden === componentAriaHidden
    const componentIsValid =
      hasIconAriaHiddenMatch &&
      hasIconClassMatch &&
      hasIconTag &&
      spanHasExpectedSize &&
      spanClassMatch &&
      hasSpanTag &&
      aHasExpectedSize &&
      aAriaLabelMatch &&
      aClassMatch &&
      aHrefMatch &&
      hasATag &&
      hasExpectedSize &&
      iconClassMatch &&
      ariaLabelMatch &&
      ariaHiddenMatch &&
      hrefMatch
    expect(componentIsValid).toBe(true)
  })

  it("has a card header component with one child div and proper class name", () => {
    /**@type {HTMLElement} */
    const headerComponent = doc.querySelector(
      'card-header[test-id^="cardHeader0"]'
    )
    const childNodes = [...headerComponent.children]
    const hasOneChild = childNodes.length === 1
    const onlyChild = childNodes.find(node => node.tagName === "HEADER")
    const childIsHeader = onlyChild !== undefined
    const expectedClassName = "card-header"
    const childHasValidClassName = onlyChild.className.includes(
      expectedClassName
    )
    const componentIsValid =
      hasOneChild && childIsHeader && childHasValidClassName
    expect(componentIsValid).toBe(true)
  })

  it("has a card header title component with one child paragraph and proper class name", () => {
    /** @type {HTMLElement} */
    const titleComponent = doc.querySelector(
      'card-header-title[test-id^="cardHeaderTitle0"]'
    )
    const childNodes = [...titleComponent.children]
    const hasOneChild = childNodes.length === 1
    const onlyChild = childNodes.find(node => node.tagName === "P")
    const childIsParagraph = onlyChild !== undefined
    const expectedClassName = "card-header-title"
    const childClassName = onlyChild.className
    const childHasValidClassName = childClassName.includes(expectedClassName)
    const hasValidFlexGrow = titleComponent.style.flexGrow === "1"
    const componentIsValid =
      hasOneChild &&
      childIsParagraph &&
      childHasValidClassName &&
      hasValidFlexGrow
    expect(componentIsValid).toBe(true)
  })

  it("has a card footer component", () => {
    /** @type {HTMLElement} */
    const footerItemComponent = doc.querySelector(
      'card-footer-item[test-id^="cardFooterItem1"]'
    )
    const { hasExpectedSize, children } = getChildren(footerItemComponent, 1)
    const pTag = children.find(node => node.tagName === "P")
    const hasPTag = pTag !== undefined
    const pTagClassName = pTag.className
    const classNameMatch = pTagClassName.includes("card-footer-item")

    const componentIsValid = hasExpectedSize && hasPTag && classNameMatch
    expect(componentIsValid).toBe(true)
  })
})
