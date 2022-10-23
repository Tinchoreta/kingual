const inputNombre = document.querySelector("#nombre")
const inputTelefono = document.querySelector("#telefono")
const inputEmail = document.querySelector("#email")
const inputAsunto = document.querySelector("#asunto")
const inputMensaje = document.querySelector("#mensaje")
const btnEnviarMsg = document.querySelector("#btnEnviarMsg")

function guardarDatosLocal() {
    try {
        localStorage.setItem("nombre",inputNombre.value) 
        localStorage.setItem("telefono",inputTelefono.value)
        localStorage.setItem("email",inputEmail.value)
        localStorage.setItem("asunto",inputAsunto.value)
        localStorage.setItem("mensaje",inputMensaje.value)
    }
    catch (error) {
        console.log(error)
    }

}

btnEnviarMsg.addEventListener("click",guardarDatosLocal)

//Operador OR

function recuperarDatosLocal() {
    
    inputNombre.value = localStorage.getItem("nombre") || ""
    inputTelefono.value = localStorage.getItem("telefono") || ""
    inputEmail.value = localStorage.getItem("email") || ""
    inputAsunto.value = localStorage.getItem("asunto") || ""
    inputMensaje.value = localStorage.getItem("mensaje") || ""
}

document.addEventListener("DOMContentLoaded", recuperarDatosLocal)
