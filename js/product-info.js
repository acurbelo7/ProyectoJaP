//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productArray;
var category = {};
function showInfoProduct(productArray){

    let htmlContentToAppend = "";

    
    htmlContentToAppend +=`
    <div class="container mt-5">
      <div class="text-center p-4">
        <h2>Descripción del producto seleccionado</h2>
        <p class="lead">Encontrarás aquí toda la información de la categoria `+productArray.category+`.</p><hr>
       
      </div>
      <h3 id="categoryName">`+productArray.name+`</h3>
      <hr class="my-3">
      <dl>
        <dt>Descripción: </dt>
        <dd>
          <p id="categoryDescription">`+productArray.description+`</p>
        </dd>

        <dt>Precio</dt>
        <dd>
          <p id="productCount"> `+ productArray.currency +` `+productArray.cost+`</p>
        </dd>

        <dt>Cantidad de productos vendidos</dt>
        <dd>
          <p id="productCriteria">`+ productArray.soldCount +`</p>
        </dd>

        <dt>Imágenes ilustrativas</dt>
        <dd>
          <div class="row text-center text-lg-left pt-2" id="productImagesGallery">
          
          </div>
            
            `
            document.getElementById("product-info").innerHTML = htmlContentToAppend;
    //}
}
function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function showComments(){
    let htmlContentToAppend = "";
    
    for(let i = 0; i < comments.length; i++){
        let obj = comments[i];
        htmlContentToAppend+=`
        <dt>Comentarios sobre el producto del usuario `+obj.user+` </dt>
        <dd>
          <h5>
          <p id="productCriteria">`+ obj.description +`</p>
          <p id="productCriteria">`+ obj.dateTime +`</p>
          <p id="productCriteria">Puntuacion del usuario: `+ califico(obj.score) +`</p><hr>
        </dd>
        `
        document.getElementById("product-comment").innerHTML = htmlContentToAppend;

    }

}

function califico(score){
  
  let estrellas = "";
  for (let i=1; i<=score; i++){
          estrellas += '<i class="fas fa-star"></i>';
          
      }
      return estrellas
}

function miComentario(){
  alert("Tu comentario fue enviado con exito!!");

}
function nuevoComentario(){
  let htmlContentToAppend = "";
  htmlContentToAppend+=`
  <form onsubmit="miComentario()">
      <label for="productCriteria"> Nuevo comentario </label><br>
      <textarea class="form-control" id="productCriteria"></textarea><br>
      <label for="productCriteria"> Puntuacion </label><br>
      <input type="number" class="form-control" min="1" max="5" id="productCriteria"><br><br>
      <button type="submit" class="btn btn-info">Enviar</button>
  </form>
  `
  document.getElementById("new-comment").innerHTML = htmlContentToAppend;
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if(resultObj.status === "ok"){
            productArray = resultObj.data;
            showInfoProduct(productArray);
            showImagesGallery(productArray.images);

        }
        getJSONData(PRODUCT_INFO_COMMENTS_URL ).then(function(resultObj){
            if(resultObj.status === "ok"){
                comments = resultObj.data;
                showComments();
                califico();
                nuevoComentario();
                
            }
        });
    });
});