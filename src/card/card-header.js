import { css } from 'emotion';
export default class CardHeader extends HTMLElement {
  backgroundColor = 'transparent';
  shadow = '0 1px 2px rgba(10, 10, 10, 0.1)';
  constructor() {
    super();
    const { getAttributes, getStyles, renderElements } = this;
    getAttributes();
    getStyles();
    renderElements();
  }
  getAttributes = () => {
    const { shadow, backgroundColor } = this;
    this.shadow = this.getAttribute('shadow') || shadow;
    this.backgroundColor =
      this.getAttribute('backgroundColor') || backgroundColor;
  };

  getStyles = () => {
    const { backgroundColor, shadow } = this;
    const output = css`
      background-color: ${backgroundColor};
      align-items: stretch;
      box-shadow: ${shadow};
      display: flex;
    `;
    this.classList.add(output);
  };

  renderElements = () => {
    const { children } = this;
    const childNodes = [...children];
    childNodes.forEach(node => this.appendChild(node));
  };
}

customElements.define('b-card-header', CardHeader);
