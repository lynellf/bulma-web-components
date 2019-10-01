export default class CardHeader extends HTMLElement {
  constructor() {
    super()
    const childNodes = [...this.childNodes]
    const dupHeader = childNodes.find(node => {
      // @ts-ignore
      const tagName = node.tagName
      // @ts-ignore
      const className = node.className
      const hasTagName = tagName !== undefined
      const hasClassName = className !== undefined
      const tagNameMatch = hasTagName ? tagName === "HEADER" : false
      const classNameMatch = hasClassName
        ? className.includes("card-header")
        : false
      const isMatch = tagNameMatch && classNameMatch
      if (!isMatch) {
        return false
      }
      return true
    })

    const hasDuplicateHeader = dupHeader !== undefined
    if (!hasDuplicateHeader) {
      const container = document.createElement("header")
      container.classList.add("card-header")
      childNodes.forEach(node => container.appendChild(node))
      this.textContent = ""
      this.appendChild(container)
    }

    return
  }
}
