import { LitElement,html } from "lit-element";
export class ComunicaComponentesConAjax1 extends LitElement{
    static get properties(){
        return {
            dato: {type: String}
        }
    }
    constructor(){
        super();
        this.dato="";
    }
    render(){
        return html `
            <link rel="stylesheet" href="./css/components/contenedorComponent.css">
            <div class="componentShadowDOM">
                <h3>Comunica Componentes con ajax 1</h3>
                <p>Escribe un dato y envíaselo al componente de la derecha.</p>
                <input id="datoEnviar" type="text" @change=${this.cambiarDato}>
                <button @click=${this.ajax}>ENVIAR</button>
                <p id="respuesta">Respuesta: <br> <b>${this.dato}</b></p>
            </div>

        `
    }
    cambiarDato(e){
        this.dato= e.target.value;
    }
    ajax(){
        // const http = new XMLHttpRequest();
        // const url = 'http://127.0.0.1:8081/';

        // http.onreadystatechange = function(){
        //     if(this.readyState == 4 && this.status == 200){
        //         console.log('responseText: ' + this.responseText);
        //         this.dato = this.responseText;
        //     }
        // }
        
        // http.open("GET",url);
        // http.send();
    }
}
customElements.define('comunica-componentes-con-ajax1', ComunicaComponentesConAjax1);