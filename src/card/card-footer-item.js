export default class CardFooterItem extends HTMLElement {
  /**
   * @param {HTMLElement | Element} element
   * @param {string[]} attributeArray
   */
  getAttributes = (element, attributeArray) => {
    /** @type {{ [key: string]: string }} */
    const outputObj = {}
    const attributes = attributeArray.reduce((output, attr) => {
      output[attr] = element.getAttribute(attr)
      return output
    }, outputObj)
    return attributes
  }

  /**
   * @param {string} tagName
   */
  getElement = tagName => {
    const lowerTagName = tagName.toLowerCase()
    const element = document.createElement(lowerTagName)
    return element
  }
  connectedCallback() {
    const { getAttributes, textContent, getElement } = this
    const childNodes = [...this.childNodes]
    const duplicates = childNodes.filter(node => {
      // @ts-ignore
      const className = node.className
      const hasClassName = className !== null && className !== undefined
      if (!hasClassName) {
        return false
      }
      const isDupe = className.includes("card-footer-item")
      if (!isDupe) {
        return false
      }
      return true
    })
    const hasDuplicates = duplicates.length > 0
    if (!hasDuplicates) {
      const validAttributes = ["tag", "href"]
      const { tag, href } = getAttributes(this, validAttributes)
      const hasHref = href !== undefined && href !== null
      const hasTag = tag !== undefined && tag !== null
      if (!hasTag && !hasHref) {
        throw new Error("Invalid Component Configuration")
      }
      const tagIsA = hasTag ? tag.toLowerCase() === "a" : false
      const isATag = hasHref || tagIsA
      const element = isATag ? getElement("a") : getElement("p")

      element.classList.add("card-footer-item")
      this.classList.add("card-footer-item")

      this.style.padding = "0"

      if (!isATag) {
        this.textContent = ""
        childNodes.forEach(node => element.appendChild(node))
      }

      if (isATag) {
        this.textContent = ""
        element.setAttribute("href", href)
        element.textContent = textContent
      }

      this.appendChild(element)
      return
    }
    return
  }
}
