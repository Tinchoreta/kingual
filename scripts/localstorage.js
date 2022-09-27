const inputNombre = document.querySelector("#nombre")
const inputEmail = document.querySelector("#email")
const inputComentarios = document.querySelector("#mensaje")
const btnEnviar = document.querySelector("#btnEnviarMsg")

function guardarDatos() {
    localStorage.setItem("nombre",inputNombre.value) //crear una clave y almacenar un valor
    localStorage.setItem("email",inputEmail.value)
    localStorage.setItem("comentarios",inputComentarios.value)
}

btnEnviar.addEventListener("click",guardarDatos)

function recuperarDatos() {
    inputNombre.value = localStorage.getItem("nombre") 
    inputEmail.value = localStorage.getItem("email")
    inputComentarios.value = localStorage.getItem("comentarios")
}

document.addEventListener("DOMContentLoaded", recuperarDatos)
