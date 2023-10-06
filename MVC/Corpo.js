"use strict";
class Corpo extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        this.build(shadow);
    }
    build(shadow) {
        const style = document.createElement("link");
        style.rel = "stylesheet";
        style.href = "./Cabecalho.css";
        const bloco = document.createElement("div");
        bloco.id = "corpo";
        const div_titulo = document.createElement("div");
        const titulo = document.createElement("h1");
        titulo.innerText = "TITULO";
        div_titulo.append(titulo);
        bloco.append(div_titulo);
        shadow.append(bloco, style);
    }
}
customElements.define("meu-corpo", Corpo);
