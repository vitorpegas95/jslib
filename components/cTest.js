class TestComponent extends HTMLElement {
  constructor() {
    super();

    const style = document.createElement("style");
    const template = document.createElement("template");

    style.innerHTML = `
    h1 {
        color: red;
    }
    `;
    template.innerHTML = `<h1>This is a test!</h1>`;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("test-element", TestComponent);
