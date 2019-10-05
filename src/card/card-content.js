export default class CardContent extends HTMLElement {
  styleRoot = document.createElement("style")
  backgroundColor = "transparent"
  padding = "1.5rem"
  constructor() {
    super()
    const { renderElements, getStyles } = this
    this.attachShadow({ mode: "open" })
    getStyles()
    renderElements()
  }

  getStyles = () => {
    const { backgroundColor, padding, styleRoot } = this
    const output = `
      :host {
        display: block;
        background-color: ${backgroundColor};
        padding: ${padding};
      }
    `
    styleRoot.textContent = output
  }

  renderElements = () => {
    const { children, shadowRoot, styleRoot } = this
    const childNodes = [...children]
    shadowRoot.appendChild(styleRoot)
    childNodes.forEach(node => shadowRoot.appendChild(node))
  }
}
