import { css } from 'emotion';
export default class CardImage extends HTMLElement {
  constructor() {
    super();
    const { getStyles, renderElements } = this;
    getStyles();
    renderElements();
  }
  getStyles = () => {
    const output = css`
      display: block;
      position: relative;
    `;
    this.classList.add(output);
  };

  renderElements = () => {
    const { children } = this;
    const childNodes = [...children];
    childNodes.forEach(node => this.appendChild(node));
  };
}
