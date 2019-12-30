import { LitElement, html } from 'lit-element';

class HeadlineElement extends LitElement {
  render() {
    return html`
      <h1>This is a headline</h1>
    `;
  }
}

customElements.define('headline-element', HeadlineElement);
