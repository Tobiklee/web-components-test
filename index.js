import { LitElement, html } from 'lit-element';

class IndexElement extends LitElement {
  render() {
    return html`
      <h1>This is a component</h1>
    `;
  }
}

customElements.define('index-element', IndexElement);
