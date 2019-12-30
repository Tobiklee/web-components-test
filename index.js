import { LitElement, html, customElement, property } from 'lit-element';

@customElement('my-element')
class MyElement extends LitElement {
  render() {
    return html`
      <h1>This is a component</h1>
    `;
  }
}
