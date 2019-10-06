import { css } from 'emotion'
export default class CardFooter extends HTMLElement {
  backgroundColor = 'transparent'
  borderTop = "1px solid hsl(0, 0%, 86%)"
  constructor() {
    super()
    const { getAttributes, getStyles, renderElements } = this
    getAttributes();
    getStyles();
    renderElements();
  }

  getAttributes = () => {
    const {
      borderTop,
      backgroundColor
    } = this;
    this.borderTop = this.getAttribute('borderTop') || borderTop;
    this.backgroundColor = this.getAttribute('backgroundColor') || backgroundColor;
  }

  getStyles = () => {
    const { backgroundColor, borderTop } = this
    const output = css`
      background-color: ${backgroundColor};
      border-top: ${borderTop};
      align-items: stretch;
      display: flex;

      card-footer-link:not(:last-child),
      card-footer-item:not(:last-child) {
        border-right: 1px solid hsl(0, 0%, 86%);
      }
    `;
    this.classList.add(output)
  }

  renderElements = () => {
    const { children } = this
    const childNodes = [...children]
    childNodes.forEach(node => this.appendChild(node))
  }
}

customElements.define('b-card-footer', CardFooter);