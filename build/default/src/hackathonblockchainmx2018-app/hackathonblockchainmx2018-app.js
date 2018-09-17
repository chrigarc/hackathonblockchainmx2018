import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * @customElement
 * @polymer
 */

class Hackathonblockchainmx2018App extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'hackathonblockchainmx2018-app'
      }
    };
  }

}

window.customElements.define('hackathonblockchainmx2018-app', Hackathonblockchainmx2018App);