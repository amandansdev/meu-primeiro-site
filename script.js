function validaForm(){
    
    let formulario = document.querySelector("#form");
    let firstName = document.querySelector("#fisrtnameInput");
    let lastName = document.querySelector("#lastnameInput");
    let email = document.querySelector("#emailInput");
    let senha = document.querySelector("#senhaInput");
    let senhaConfirma = document.querySelector("#confirmsenhaInput");
    let generoMasc = document.querySelector("#masculinoCheck");
    let generoFem = document.querySelector("#femininoCheck");
    let generoOutro = document.querySelector("#outroCheck");

    if(firstName == ""){

        alert("Preencha o seu nome");
        return false
    }

}