//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    let user = JSON.parse(localStorage.getItem('datos'));
    if(user.estado == 'conectado'){
    location.href='pagina.html'
    }
});

function loguear(){
    let usuario = document.getElementById('user');
    let password = document.getElementById('password');
    let datos = {}
    
    if(usuario.value.trim() === '' || password.value.trim() === ''){
        alert('Debe ingresar todos sus datos');
    }else{
            datos.usuario = usuario.value;

            datos.password = password.value;
            
            //datos.estado = 'conectado'

            sessionStorage.setItem('datos',JSON.stringify(datos));

            location.href = 'pagina.html';

            sessionStorage.setItem('login', usuario.value);

        }
}


/*function desconectar(){
    localStorage.clear();
    sessionStorage.clear();
    location.href = 'login.html';
    signOut();
}*/

function recordar(){
   let check = document.getElementById('checkbox').checked;
   let usuario = document.getElementById('user');
   let password = document.getElementById('password');
   let datos = {};

   if(check){
        datos.usuario = usuario.value;

        datos.password = password.value;

        datos.estado = 'conectado';

        localStorage.setItem('datos',JSON.stringify(datos));

   }
   

}




function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    /*console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());*/

    // The ID token you need to pass to your backend:
    /*var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);*/

    let usuario = {};

    usuario.nombre = profile.getName();
    usuario.estado = 'conectado';
    
    
    localStorage.setItem('usuario',JSON.stringify(usuario));
    location.href = 'pagina.html';
  }

  

  function onLoad(){
      gapi.load('auth2',function(){
          gapi.auth2.init();
      });
  }