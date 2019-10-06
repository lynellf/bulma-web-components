import { css } from 'emotion';

export default class CardHeaderIconLink extends HTMLElement {
  href = '';
  noreferrer = 'false';
  target = '_self';
  padding = '0.75rem';
  color = '#3273dc';
  constructor() {
    super();
    const { getStyles, renderElements, handleClick, getAttributes } = this;
    this.addEventListener('click', handleClick);
    getAttributes();
    getStyles();
    renderElements();
  }

  getAttributes = () => {
    const { href, noReferrer, padding, target, color } = this;

    this.href = this.getAttribute('href') || href;
    this.noReferrer = this.getAttribute('noReferrer') || noReferrer;
    this.target = this.getAttribute('target') || target;
    this.padding = this.getAttribute('padding') || padding;
    this.color = this.getAttribute('color') || color;
  };

  handleClick = () => {
    const { href, noReferrer, target } = this;
    const options = [];
    const hasNoReferrer = noReferrer !== 'false';
    if (hasNoReferrer) {
      options.push('noreferrer');
    }
    window.open(href, target, options.join(','));
  };

  getStyles = () => {
    const { padding, color } = this;
    const output = css`
      align-items: center;
      color: ${color};
      cursor: pointer;
      display: flex;
      justify-content: center;
      padding: ${padding};
      &:hover {
        pointer: cursor;
      }
    `;
    this.classList.add(output);
  };

  renderElements = () => {
    const { children } = this;
    const childNodes = [...children];
    childNodes.forEach(node => this.appendChild(node));
  };
  disconnectedCallback = () => {
    const { handleClick } = this;
    this.removeEventListener('click', handleClick);
  };
}

customElements.define('b-card-header-icon-link', CardHeaderIconLink);