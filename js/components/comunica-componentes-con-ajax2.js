import { LitElement,html } from "lit-element";
export class ComunicaComponentesConAjax2 extends LitElement{
    static get properties(){
        return {

        }
    }
    constructor(){
        super();
    }
    render(){
        return html `
            <link rel="stylesheet" href="./css/components/contenedorComponent.css">
            <div class="componentShadowDOM">
                <h3>Comunica Componentes con ajax 2</h3>
                <p>Escribe un dato y envíaselo al componente de la izquierda.</p>

            </div>

        `
    }

}
customElements.define('comunica-componentes-con-ajax2', ComunicaComponentesConAjax2);