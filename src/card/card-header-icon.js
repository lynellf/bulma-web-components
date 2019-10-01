export default class CardHeaderIcon extends HTMLElement {
  constructor() {
    super()
    const { getAttributes, textContent, getElement } = this
    const validAttributes = ["href", "aria-hidden", "aria-label", "icon-class"]
    const {
      href,
      "aria-hidden": ariaHidden,
      "aria-label": ariaLabel,
      "icon-class": iconClass
    } = getAttributes(this, validAttributes)
    const hasAriaHiddden = ariaHidden !== undefined && ariaHidden !== null
    const hasAriaLabel = ariaLabel !== undefined && ariaLabel !== null
    const link = document.createElement("a")
    link.setAttribute("href", href ? href : "#")
    link.classList.add("card-header-icon")
    if (hasAriaLabel) {
      link.setAttribute("aria-label", ariaLabel)
    }

    const span = document.createElement("span")
    span.classList.add("icon")
    const icon = document.createElement("i")
    icon.className = iconClass
    if (hasAriaHiddden) {
      icon.setAttribute("aria-hidden", ariaHidden)
    }
    this.textContent = ""
    span.appendChild(icon)
    link.appendChild(span)
    this.appendChild(link)
    return
  }
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
}
