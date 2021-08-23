function desconectar(){
    localStorage.clear();
    sessionStorage.clear();
    location.href = 'index.html';
    signOut();
    
}

function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function (){
        auth2.desconectar();
        console.log('User Signed Out.'); 
    });
}

function onLoad(){
    gapi.load('auth2',function(){
        gapi.auth2.init();
    });
}