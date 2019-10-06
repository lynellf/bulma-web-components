import { css } from 'emotion';
export default class CardFooterItem extends HTMLElement {
  constructor() {
    super();
    const { renderElements, getStyles } = this;
    getStyles();
    renderElements();
  }

  getStyles = () => {
    const output = css`
      align-items: center;
      display: flex;
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 0;
      justify-content: center;
      padding: 0.75rem;
    `;
    this.classList.add(output);
  };

  renderElements = () => {
    const { children } = this;
    const childNodes = [...children];
    childNodes.forEach(node => this.appendChild(node));
  };
}

customElements.define('b-card-footer-item', CardFooterItem);
