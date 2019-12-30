import { LitElement, html } from "lit-element";

class MyElement extends LitElement {
  render() {
    return html`
      <h1>This is a component</h1>
    `;
  }
}

customElements.define("my-element", MyElement);
