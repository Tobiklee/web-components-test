import { LitElement, html } from 'lit-element';

class TextElement extends LitElement {
  render() {
    return html`
      <p>This is a text</p>
    `;
  }
}

customElements.define('text-element', TextElement);
