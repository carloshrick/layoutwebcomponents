"use strict";
class Cabecalho extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        this.build(shadow);
    }
    build(shadow) {
        const style = document.createElement("link");
        style.rel = "stylesheet";
        style.href = "./Cabecalho.css";
        const header = document.createElement("header");
        const div_titulo = document.createElement("div");
        const div_links = document.createElement("div");
        const titulo = document.createElement("h1");
        titulo.innerText = "TITULÃO";
        const link_1 = document.createElement("a");
        link_1.target = "_blank";
        link_1.href = "#";
        link_1.innerText = "LINK";
        const link_2 = document.createElement("a");
        link_2.target = "_blank";
        link_2.href = "#";
        link_2.innerText = "LINK";
        const link_3 = document.createElement("a");
        link_3.target = "_blank";
        link_3.href = "#";
        link_3.innerText = "LINK";
        div_titulo.append(titulo);
        div_links.append(link_1, link_2, link_3);
        header.append(div_titulo, div_links);
        shadow.append(header, style);
    }
}
customElements.define("meu-cabecalho", Cabecalho); //oi amigoso
