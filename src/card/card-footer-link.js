export default class CardFooterLink extends HTMLElement {
  styleRoot = document.createElement("style")
  borderTop = "1px solid hsl(0, 0%, 86%)"
  linkColor = "#3273dc"

  linkHoverColor = "blue"
  href="#"

  constructor() {
    super()
    const { getStyles, renderElements } = this
    this.attachShadow({ mode: "open" })
    getStyles()
    renderElements()
  }

  getStyles = () => {
    const { styleRoot, linkColor, linkHoverColor } = this
    const output = `
      :host {
        align-items: center;
        color: ${linkColor};
        cursor: pointer;
        display: flex;
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 0;
        justify-content: center;
        text-decoration: none;
      }

      :host:hover {
        color: ${linkHoverColor}
      }

      :host:first-child {
        border-right: 1px solid hsl(0, 0%, 86%);
      }
    `
    styleRoot.textContent = output
  }

  renderElements = () => {
    const { shadowRoot, styleRoot } = this
    shadowRoot.textContent = this.textContent
    shadowRoot.appendChild(styleRoot)
  }
}
