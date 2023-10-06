class Corpo extends HTMLElement{
    constructor(){
        super();
        
        const shadow = this.attachShadow({mode:"open"});  
       this.build(shadow);
    }

    build(shadow: ShadowRoot){

        const style: HTMLLinkElement = document.createElement("link");
        style.rel = "stylesheet";
        style.href = "./Cabecalho.css";

        const bloco: HTMLElement = document.createElement("div");
        bloco.id = "corpo"
        const div_titulo: HTMLDivElement = document.createElement("div");
        const titulo: HTMLHeadingElement = document.createElement("h1");
        titulo.innerText =  "TITULO";

      
        div_titulo.append(titulo);
        bloco.append(div_titulo);   
        shadow.append(bloco, style);
    }
}
customElements.define("meu-corpo", Corpo);