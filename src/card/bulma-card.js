export default class BulmaCard extends HTMLElement {
  styleRoot = document.createElement("style")
  color = "inherit"
  backgroundColor = "#fff"
  shadow = "0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)"
  constructor() {
    super()
    const { renderElements, getStyles } = this
    this.attachShadow({ mode: "open" })
    getStyles()
    renderElements()
  }
  getStyles = () => {
    const { backgroundColor, color, shadow, styleRoot } = this
    const output = `
      :host {
        background-color: ${backgroundColor};
        box-shadow: ${shadow};
        color: ${color};
        display: block;
        max-width: 100%;
        position: relative;
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
