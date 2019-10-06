import { css } from 'emotion';
export default class CardFooterLink extends HTMLElement {
  borderTop = '1px solid hsl(0, 0%, 86%)';
  linkColor = '#3273dc';

  linkHoverColor = '#363636';
  href = '#';
  noreferrer = 'false';
  target = '_self';

  constructor() {
    super();
    const { getStyles, renderElements, handleClick, getAttributes } = this;
    this.addEventListener('click', handleClick);
    getAttributes();
    getStyles();
    renderElements();
  }

  getAttributes = () => {
    const {
      borderTop,
      href,
      linkColor,
      linkHoverColor,
      noReferrer,
      target
    } = this;
    this.borderTop = this.getAttribute('borderTop') || borderTop;
    this.linkColor = this.getAttribute('linkColor') || linkColor;
    this.linkHoverColor = this.getAttribute('linkHoverColor') || linkHoverColor;
    this.href = this.getAttribute('href') || href;
    this.noReferrer = this.getAttribute('noReferrer') || noReferrer;
    this.target = this.getAttribute('target') || target;
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
    const { linkColor, linkHoverColor } = this;
    const output = css`
      align-items: center;
      color: ${linkColor};
      cursor: pointer;
      display: flex;
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 0;
      justify-content: center;
      padding: 0.75rem;
      text-decoration: none;

      &:hover {
        color: ${linkHoverColor}
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
