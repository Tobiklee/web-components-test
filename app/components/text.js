import { LitElement, html, css } from 'lit-element';

class TextElement extends LitElement {
  static get styles() {
    return css`
      .text {
        text-align: center;
      }
    `;
  }

  render() {
    return html`
      <p class="text">WebComponents are awesome ...</p>
    `;
  }
}

customElements.define('text-element', TextElement);
