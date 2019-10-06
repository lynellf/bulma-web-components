import { css } from 'emotion'
export default class BulmaCard extends HTMLElement {
  color = "inherit"
  backgroundColor = "#fff"
  shadow = "0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)"
  constructor() {
    super()
    const { getAttributes, renderElements, getStyles } = this
    getAttributes()
    getStyles()
    renderElements()
  }

  getAttributes = () => {
    const {
      backgroundColor, 
      color,
      shadow
    } = this

    this.backgroundColor = this.getAttribute('backgroundColor') || backgroundColor
    this.color = this.getAttribute('color') || color
    this.shadow = this.getAttribute('shadow') || shadow
  }
  getStyles = () => {
    const { backgroundColor, color, shadow } = this
    const output = css`
      background-color: ${backgroundColor};
      box-shadow: ${shadow};
      color: ${color};
      display: block;
      max-width: 100%;
      position: relative;
    `
    this.classList.add(output)
  }

  renderElements = () => {
    const { children } = this
    const childNodes = [...children]
    childNodes.forEach(node => this.appendChild(node))
  }
}
