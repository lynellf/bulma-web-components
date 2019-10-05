export default class CardFooterItem extends HTMLElement {
  styleRoot = document.createElement("style")
  href = ""
  borderTop = "1px solid inherit"
  linkColor = "blue"
  linkHoverColor = "blue"
  constructor() {
    super()
  }

  getStyles = () => {
    const { styleRoot, href, linkColor, linkHoverColor } = this
    const isLink = href !== ""
    const linkStyles = `
      a {
        color: ${linkColor};
        cursor: pointer;
        text-decoration: none;
      }

      a:hover {
        color: ${linkHoverColor}
      }
    `
    const output = `
      a, p {
        align-items: center
        display: flex
        flex-basis: 0
        flex-grow: 1
        flex-shrink: 0
        justify-content: center
        padding: $card-footer-padding
      }

      :a:not(last-child) {
        border-right:
      }

      ${isLink ? linkStyles : ""}
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
