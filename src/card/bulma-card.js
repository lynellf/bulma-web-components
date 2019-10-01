export default class BulmaCard extends HTMLElement {
  constructor() {
    super()
    const childNodes = [...this.childNodes]
    const cardContainer = document.createElement("div")
    cardContainer.classList.add("card")
    childNodes.forEach(node => cardContainer.appendChild(node))
    this.textContent = ""
    this.appendChild(cardContainer)
  }
}
