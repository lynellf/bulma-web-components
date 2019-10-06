import { css } from 'emotion';
export default class CardContent extends HTMLElement {
  backgroundColor = 'transparent';
  padding = '1.5rem';
  constructor() {
    super();
    const { getAttributes, renderElements, getStyles } = this;
    getAttributes();
    getStyles();
    renderElements();
  }

  getAttributes = () => {
    const { backgroundColor, padding } = this;

    this.backgroundColor =
      this.getAttribute('backgroundColor') || backgroundColor;
    this.padding = this.getAttribute('padding') || padding;
  };

  getStyles = () => {
    const { backgroundColor, padding } = this;
    const output = css`
      display: block;
      background-color: ${backgroundColor};
      padding: ${padding};
    `;
    this.classList.add(output);
  };

  renderElements = () => {
    const { children } = this;
    const childNodes = [...children];
    childNodes.forEach(node => this.appendChild(node));
  };
}

customElements.define('b-card-content', CardContent);
