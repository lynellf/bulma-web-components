export default class CardImage extends HTMLElement {
  alt = ""
  src = ""
  dimension = "4by3"
  styleRoot = document.createElement("style")
  offset = "0"
  constructor() {
    super()
    const { renderElements, getStyles } = this
    this.attachShadow({ mode: "open" })
    getStyles()
    renderElements()
  }

  getStyles = () => {
    const { styleRoot, offset: imgOffset } = this
    const offset = `
      bottom: ${imgOffset};
      left: ${imgOffset};
      position: absolute;
      right: ${imgOffset};
      top: ${imgOffset};
    `
    const output = `
      :host {
        display: block;
        position: relative;
      }

      figure {
        margin-left: 2em;
        margin-right: 2em;
      }

      figure {
        display: block;
        margin: 0;
        padding: 0;
        text-align: center;
      }

      .image {
        display: block;
        position: relative;
      }

      .image img {
        display: block;
        height: auto;
        width: 100%;
      }

      .image.is-square, .image.is-1by1 { 
        padding-top: 100%;
      }

      .image.is-5by4 {
        padding-top: 80%;
      }

      .image.is-4by3 {
        padding-top: 75%;
      }
      .image.is-3by2 {
        padding-top: 66.6666%;
      }
      .image.is-5by3 {
        padding-top: 60%;
      }
      .image.is-16by9 {
        padding-top: 56.25%;
      }
      .image.is-2by1 {
        padding-top: 50%;
      }
      .image.is-3by1 {
        padding-top: 33.3333%;
      }
      .image.is-4by5 {
        padding-top: 125%;
      }
      .image.is-3by4 {
        padding-top: 133.3333%;
      }
      .image.is-2by3 {
        padding-top: 150%;
      }
      .image.is-3by5 {
        padding-top: 166.6666%;
      }
      .image.is-9by16 {
        padding-top: 177.7777%;
      }
      .image.is-1by2 {
        padding-top: 200%;
      }
      .image.is-1by3 {
        padding-top: 300%;
      }

      .image.is-square img, .image.is-1by1 img,
      .image.is-5by4 img,
      .image.is-4by3 img,
      .image.is-3by2 img,
      .image.is-5by3 img,
      .image.is-16by9 img,
      .image.is-2by1 img,
      .image.is-3by1 img,
      .image.is-4by5 img,
      .image.is-3by4 img,
      .image.is-2by3 img,
      .image.is-3by5 img,
      .image.is-9by16 img,
      .image.is-1by2 img,
      .image.is-1by3 img {
        height: 100%;
        width: 100%;
        ${offset}
      }
    `
    styleRoot.textContent = output
  }

  renderElements = () => {
    const { shadowRoot, styleRoot } = this
    // const childNodes = [...children]
    shadowRoot.appendChild(styleRoot)
    // childNodes.forEach(node => shadowRoot.appendChild(node))
    const dimension = this.getAttribute("dimension")
    const alt = this.getAttribute("alt")
    const src = this.getAttribute("src")
    const imageElement = document.createElement("img")
    imageElement.setAttribute("src", src)
    imageElement.setAttribute("alt", alt)
    const figureElement = document.createElement("figure")
    figureElement.classList.add("image", `is-${dimension}`)

    figureElement.appendChild(imageElement)
    shadowRoot.appendChild(figureElement)
  }
}
