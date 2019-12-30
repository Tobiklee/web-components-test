import { LitElement, html } from 'lit-element';
import './app/app.js';

class IndexElement extends LitElement {
  render() {
    return html`
      <app-element></app-element>
    `;
  }
}

customElements.define('index-element', IndexElement);
