//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
/*const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";*/
var datos = [];
let = htmlContentToAppend = '';
function showProducts(array){

        for(let i = 0; i < array.length; i++){
            let lista = datos[i];
            htmlContentToAppend+=` 
            <li id='productos'>Nombre: ` + lista.name + `<br>` + `Description: `+ lista.description + `<br>`+ `Costo: ` + lista.cost +`<br>`+ `</li>`;
             document.getElementById("list").innerHTML = htmlContentToAppend
            }
            

}
        
       



document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(objetos){
        if(objetos.status === 'ok'){
            datos = objetos.data;
            showProducts(datos);
        }
    });
    
   
    
});
