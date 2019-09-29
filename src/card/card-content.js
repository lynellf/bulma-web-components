export default class CardContent extends HTMLElement {
  connectedCallback() {
    const childNodes = [...this.childNodes]
    const container = document.createElement("div")
    container.classList.add("card-content")
    childNodes.forEach(node => container.appendChild(node))
    this.textContent = ""
    this.appendChild(container)
  }
}
