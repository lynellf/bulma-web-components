import { css } from 'emotion';
export default class CardFooterItem extends HTMLElement {
  borderTop = '1px solid inherit';
  constructor() {
    super();
    const { getAttributes, renderElements, getStyles } = this;
    getAttributes();
    getStyles();
    renderElements();
  }

  getAttributes = () => {
    const { borderTop } = this;
    this.borderTop = this.getAttribute('borderTop') || borderTop;
  };

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
