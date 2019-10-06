import { css } from 'emotion';
export default class CardHeaderTitle extends HTMLElement {
  weight = '700';
  padding = '0.75rem';
  color = '#363636'
  constructor() {
    super();
    const { getAttributes, getStyles, renderElements } = this;
    getAttributes();
    getStyles();
    renderElements();
  }

  getAttributes = () => {
    const { padding, weight, color } = this;
    this.padding = this.getAttribute('padding') || padding;
    this.weight = this.getAttribute('weight') || weight;
    this.color = this.getAttribute('color') || color;
  };

  getStyles = () => {
    const { padding, weight, color } = this;
    const output = css`
      align-items: center;
      color: ${color};
      display: flex;
      flex-grow: 1;
      font-weight: ${weight};
      padding: ${padding};

      &.is-centered {
        justify-content: center;
      }
    `;
    this.classList.add(output);
  };

  renderElements = () => {
    const { children } = this
    const childNodes = [...children]
    childNodes.forEach(node => this.appendChild(node))
  }
}
