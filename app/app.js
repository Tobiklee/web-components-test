import { LitElement, html } from 'lit-element';
import './components/headline.js';
import './components/text.js';

class AppElement extends LitElement {
  render() {
    return html`
      <headline-element></headline-element>
      <text-element></text-element>
    `;
  }
}

customElements.define('app-element', AppElement);
