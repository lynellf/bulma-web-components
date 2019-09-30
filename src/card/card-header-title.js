export default class CardHeaderTitle extends HTMLElement {
  connectedCallback() {
    const { textContent } = this
    const container = document.createElement("p")
    container.classList.add("card-header-title")
    container.textContent = textContent
    this.style.flexGrow = "1"
    this.textContent = ""
    this.appendChild(container)
  }
}
