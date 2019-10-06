import { css } from 'emotion'
export default class CardHeaderIcon extends HTMLElement {
  padding = '0.75rem';
  color = '#3273dc';
  constructor() {
    super();
    const { getStyles, renderElements, getAttributes } = this;
    getAttributes();
    getStyles();
    renderElements();
  }

  getAttributes = () => {
    const { padding, color } = this;
    this.padding = this.getAttribute('padding') || padding;
    this.color = this.getAttribute('color') || color;
  };
  getStyles = () => {
    const { padding, color } = this;
    const output = css`
      align-items: center;
      color: ${color};
      display: flex;
      justify-content: center;
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
