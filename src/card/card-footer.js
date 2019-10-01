export default class CardFooter extends HTMLElement {
  constructor() {
    super()
    const childNodes = [...this.childNodes]
    const container = document.createElement("footer")
    container.classList.add("card-footer")
    childNodes.forEach(node => container.appendChild(node))
    this.textContent = ""
    this.appendChild(container)
  }
}
