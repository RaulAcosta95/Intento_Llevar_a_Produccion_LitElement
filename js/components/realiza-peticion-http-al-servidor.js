import { LitElement,html } from "lit-element";
export class RealizaPeticionHttpAlServidor extends LitElement{
    static get properties(){
        return {
            respuestaAjax: {type: String}
        }
    }
    constructor(){
        super();
        this.respuestaAjax = "";
    }
    render(){
        return html `
            <link rel="stylesheet" href="./css/components/contenedorComponent.css">
            <div class="componentShadowDOM">
                <h3>Realiza Petición GET a archivos del mismo repositorio</h3>
                <button @click=${this.peticionAjax}>GET AJAX Texto</button>
                <button @click=${this.peticionAjaxJSON}>GET AJAX JSON</button>
                <p>Respuesta: <b>${this.respuestaAjax}</b></p>

            </div>
        `
    }


    peticionAjax(){
        console.log('Petición GET AJAX Texto: ');
        let respuesta = "";
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'archivo.txt', true);//True indica que serán peticiones asíncronas
        xhttp.send();
        const miPromesa = new Promise( (resolve,reject)=>{
            xhttp.onreadystatechange = function(){
                        if(this.readyState == 4 && this.status == 200){
                            let datos = this.responseText;
                            console.log('Datos: ');
                            console.log(datos);                
                            resolve (datos);
                        }
                    }
        });
        miPromesa.then( resolve =>{
            this.respuestaAjax = resolve;
        })
    }


    peticionAjaxJSON(){
        this.respuestaAjax = "Ver consola para ver Json -->"
        console.log('Peticion GET AJAX JSON: ');
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'catalogo.json', true);
        xhttp.send();
        const miPromesa = new Promise( (resolve,reject)=>{
            xhttp.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    let datos = JSON.parse(this.responseText);
                    resolve (datos);
                }
            }
        });
        miPromesa.then( resolve => {
            console.log('Datos: ');
            console.log(resolve);
        })
    }
}
customElements.define('realiza-peticion-http-al-servidor',RealizaPeticionHttpAlServidor);