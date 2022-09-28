const titulo = document.getElementById("titulo")
const parrafo = document.getElementById("parrafo")
const parrafos = document.getElementsByTagName("p")
const tabla = document.getElementById("tabla")
const filtroPaquete = document.getElementById("filtroPaquete")


function cargarPaquetes(array) {
let fila = ""
    tabla.innerHTML = ""
    array.forEach(paquete => {
        fila = `<tr>
                    <td>${paquete.numeroPaquete}</td>
                    <td>${paquete.nombre}</td>
                    <td> $ ${paquete.precio}</td>
                    <td> $ ${paquete.precioConIva()}</td>
                    <td><button id="btn${paquete.numeroPaquete}">+</button></td>
                </tr>`
                tabla.innerHTML += fila
                console.table(tabla.innerHTML)
    })
} 
cargarPaquetes(paquetes)

const parrafoFinal = document.createElement("p")

function crearElementoHTML() {
          parrafoFinal.id = "parrafoHTML"
          parrafoFinal.innerText = "Párrafo creado desde JS."
          parrafoFinal.className = "text-rojo"
          document.body.append(parrafoFinal)
}

crearElementoHTML()
//EVENTOS JAVASCRIPT

const inputFiltrar = document.querySelector("input")

function filtrarPaquetes() { //FILTRAR PAQUETES EN LA TABLA INGRESANDO PARTE DEL NOMBRE
    inputFiltrar.value = inputFiltrar.value.trim().toUpperCase()
    if (inputFiltrar.value !== "") {
        const resultadobusqueda = paquetes.filter(paquete => paquete.nombre.includes(inputFiltrar.value))
              if (resultadobusqueda.length === 0) {
                console.clear()
                console.warn("No se encontraron paquetes.")
                cargarPaquetes(paquetes)
              } else {
                cargarPaquetes(resultadobusqueda)
              }
    } else {
        cargarPaquetes(paquetes)
    }
}

inputFiltrar.addEventListener("input", filtrarPaquetes) //Va filtrando conforme vamos escribiendo