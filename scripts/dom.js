const titulo = document.getElementById("titulo")
const parrafo = document.getElementById("parrafo")
const parrafos = document.getElementsByTagName("p")
const tabla = document.getElementById("tabla")
const filtroPaquete = document.getElementById("filtroPaquete")


function cargarPaquetes(array) {
    let fila = ""
    tabla.innerHTML = ""
    
    array.forEach(paquete => {
        
        //OPERADORES AVANZADOS
        /**
         * *
         * DESESTRUCTURACION *
         *                 * *
                             **/ 

        let {numeroPaquete, nombre, precio} = paquete
        
        fila = `<tr>
                    <td>${numeroPaquete}</td>
                    <td>${nombre}</td>
                    <td> $ ${precio}</td>
                    <td> $ ${paquete.precioConIva()}</td>
                    <td><button class="btn btn-info" id="btn${numeroPaquete}">+</button></td>
                </tr>`
        tabla.innerHTML += fila
    })
    console.table(array)
}
cargarPaquetes(paquetes)


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