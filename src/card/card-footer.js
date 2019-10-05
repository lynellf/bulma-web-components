export default class CardFooter extends HTMLElement {
  styleRoot = document.createElement('style')
  backgroundColor = 'transparent'
  borderTop = "1px solid hsl(0, 0%, 86%)"
  constructor() {
    super()
    const { getStyles, renderElements } = this
    this.attachShadow({ mode: 'open' })
    getStyles()
    renderElements()
  }

  getStyles = () => {
    const { styleRoot, backgroundColor, borderTop } = this
    const output = `
      :host {
        background-color: ${backgroundColor};
        border-top: ${borderTop};
        align-items: stretch;
        display: flex;
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
