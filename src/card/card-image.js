export default class CardImage extends HTMLElement {
  constructor() {
    super()
    const dimension = this.getAttribute("dimension")
    const alt = this.getAttribute("alt")
    const src = this.getAttribute("src")
    const imageElement = document.createElement("img")
    imageElement.setAttribute("src", src)
    imageElement.setAttribute("alt", alt)
    const figureElement = document.createElement("figure")
    figureElement.classList.add("image", dimension)

    figureElement.appendChild(imageElement)
    this.textContent = ""
    this.appendChild(figureElement)
  }
}
