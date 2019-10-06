import { html } from 'lit-html';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.js';

/**
 * @param {string} base
 * @param {string} component
 */
const renderOutput = (base, component) => `
    <div class="container">
      <br/>
      <h1 class="title">HTML</h1>
      ${base}
      <br/>
      <h1 class="title">Web Component</h1>
      <br/>
      ${component}
    </div>
  `;

export default { title: 'Card' };

export const Card = () => {
  const base = `
    <div class="card">
      <p>This is a card element.</p>
    </div>
  `;
  const component = `
    <b-card>
      <p>This is a card web component.</p>
    </b-card>
  `;
  return renderOutput(base, component);
};

export const CardContent = () => {
  const base = `
    <div class="card-content">
      <p>This is a card content element.</p>
    </div>
  `;
  const component = `
    <b-card-content>
      <p>This is a card content web component.</p>
    </b-card-content>
  `;
  return renderOutput(base, component);
};

export const CardFooter = () => {
  const base = `
    <div class="card-footer">
      <p>This is a card footer element.</p>
    </div>
  `;
  const component = `
    <b-card-footer>
      <p>This is a card footer web component.</p>
    </b-card-footer>
  `;
  return renderOutput(base, component);
};

export const CardFooterItem = () => {
  const base = `
    <p class="card-footer-item">
      <span> This is a card footer item.</span>
    </p>
  `;
  const component = `
    <b-card-footer-item>
      <span>This is a card footer item web component.</span>
    </b-card-footer-item>
  `;
  return renderOutput(base, component);
};

export const CardFooterLink = () => {
  const base = `
    <a href="#" class="card-footer-item">This is a card footer link element.</a>
  `;
  const component = `
    <b-card-footer-link href="#">
      This is a card footer link web component.
    </b-card-footer-link>
  `;
  return renderOutput(base, component);
};

export const CardHeaderIcon = () => {
  const base = `
    <span class="card-header-icon">
      <span class="icon">
        <i class="fas fa-angle-down"></i>
      </span>
    </span>
  `;
  const component = `
    <b-card-header-icon>
      <span class="icon">
        <i class="fas fa-angle-down"></i>
      </span>
    </b-card-header-icon>
  `;
  return renderOutput(base, component);
};

export const CardHeaderIconLink = () => {
  const base = `
    <a href="#" class="card-header-icon">
      <span class="icon">
        <i class="fas fa-angle-down"></i>
      </span>
    </a>
  `;
  const component = `
    <b-card-header-icon-link href="#">
      <span class="icon">
        <i class="fas fa-angle-down"></i>
      </span>
    </b-card-header-icon-link>
  `;
  return renderOutput(base, component);
};

export const CardHeaderTitle = () => {
  const base = `
    <p class="card-header-title">
      This is a card header title element
    </p>
  `;
  const component = `
    <b-card-header-title>
      This is a card header title web component
    </b-card-header-title>
  `;
  return renderOutput(base, component);
};

export const CardHeader = () => {
  const base = `
    <Header class="card-header">
      This is a card header element
    </Header>
  `;
  const component = `
    <b-card-header>
      This is a card header web component
    </b-card-header>
  `;
  return renderOutput(base, component);
};

export const CardImage = () => {
  const base = `
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </div>
  `;
  const component = `
    <b-card-header-image>
      <figure class="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </b-card-header-image>
  `;
  return renderOutput(base, component);
};
