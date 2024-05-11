
  function login(){
    let username = document.getElementById("username");
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("msj");
    if (username.value == "Mali" && password=="Mali"){ 
        const paramComponent=username.value;
        window.location.href = "cuenta.html?usuario="+ encodeURIComponent(paramComponent);
    }else{
        if(username.value =='Gera'&&password=='Gera'){
            const paramComponent=username.value;
            window.location.href = "cuenta.html?usuario="+ encodeURIComponent(paramComponent);
        }else{
            if(username.value =="Ana"&&password=="Ana"){
                const paramComponent=username.value;
                window.location.href = "cuenta.html?usuario="+ encodeURIComponent(paramComponent);
            }else{
                mensaje.innerText = "Nombre de usuario o Contraseña incorrectos"
            }
        }
    }    
}