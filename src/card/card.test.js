const { JSDOM } = require("jsdom")

describe("Bulma Card Web Components", () => {
  let htmlString = ""
  let win
  let doc

  beforeAll(async () => {
    const page = await browser.newPage()
    await page.goto("http://localhost:9000")
    htmlString = await page.content()
    win = new JSDOM(htmlString).window
    doc = win.document
  })

  it("card one exists", () => {
    // Assertion One
    // Basic Smoke Test
    const cardOne = doc.querySelector('bulma-card[test-id^="cardOne"]')
    const cardOneExists = cardOne !== null
    expect(cardOneExists).toBe(true)

    // Assertion Two
    // Card Div element exists
    const cardChildren = [...cardOne.children]
    const hasOneChild = cardChildren.length === 1
    const cardDiv = cardChildren[0]
    const childIsDiv = cardDiv.tagName === "DIV"
    const cardDivClass = cardDiv.className
    const hasValidClass = cardDivClass.includes("card")
    const cardDivExists = hasOneChild && childIsDiv && hasValidClass
    expect(cardDivExists).toBe(true)

    // Assertion Three
    // Card Div is valid
    const cardDivChildren = [...cardDiv.children]
    const cardDivHasTwoChildren = cardDivChildren.length === 2
    const cardImageComponent = cardDivChildren[0]
    const cardContentComponent = cardDivChildren[1]
    const hasCardImageComponent = cardImageComponent !== undefined
    const hasCardContentComponent = cardContentComponent !== undefined
    const cardDivHasValidChildren =
      cardDivHasTwoChildren && hasCardImageComponent && hasCardContentComponent
    expect(cardDivHasValidChildren).toBe(true)

    // Assertion Four
    // Image component is valid
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

    // Assertion Five
    // Card content component is valid
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
})
