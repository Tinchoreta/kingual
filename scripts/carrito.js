
const botonVerCarrito = document.getElementById("idBtnVerCarrito")
const tituloCarrito = document.getElementById("tituloCarrito")
const titulo = document.getElementById("titulo")
const parrafo = document.getElementById("parrafo")
const parrafos = document.getElementsByTagName("p")
const tabla = document.getElementById("tabla")
const filtroPaquete = document.getElementById("filtroPaquete")
const inputFiltrar = document.querySelector("input")

botonVerCarrito.addEventListener("click", () => {
    swal("Recuperando carrito")
    // recuperarCarrito()
    recuperoCarrito()
}
)



function eventoEnBotones(array) {

    array.forEach(paq => {
        const btn = document.querySelector(`#btn${paq.numeroPaquete}`)
        btn.addEventListener("click", () => agregarAlCarrito(`${paq.numeroPaquete}`))
    })
}


function eventoEnBotonesCarrito() {

    carrito.forEach(paq => {
        const btn = document.querySelector(`#btnDel${paq.numeroPaquete}`)
        btn.addEventListener("click", () => quitarDelCarrito(`${paq.numeroPaquete}`))
    })
}

function quitarDelCarrito(id) {

    const indexPaquete = carrito.findIndex(paq => paq.numeroPaquete === id)
    carrito.splice(indexPaquete, 1)
    console.table(carrito)
    limpiarListaCarrito()
    localStorage.clear()
    localStorage.setItem("carrito", JSON.stringify(carrito))
    recuperoCarrito()

}

function recuperoCarrito() {

    let carrito = JSON.parse(localStorage.getItem("carrito"))

    //OPERADOR AND
    if ((typeof carrito !== 'undefined' && typeof carrito !== 'null') && carrito !== null) {

        carrito.length === 0 && alerta("No hay items en el carrito",'info') 
        carrito.length === 0? limpiarListaCarrito():tituloCarrito.style.display = 'block'
        
        let tabla = document.querySelector("#carrito")
        carrito.forEach(paq => {
            let fila = `<tr>
                            <td>${paq.nombre}</td>
                            <td>$ ${paq.precio}</td>
                            <td><button class="btn btn-danger" id="btnDel${paq.numeroPaquete}">-</button></td>
                        </tr>`
            tabla.innerHTML += fila
        });
        eventoEnBotonesCarrito()
    } else {
        
        limpiarListaCarrito()
    }
}



const alerta = (mensaje, icono) => {    //ICONOS: question, warning, error, info
    Swal.fire({
        icon: icono,
        title: mensaje,
        confirmButtonText: 'Entendido',
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
    })
}

function vaciarCarrito() {

    if (Object.entries(carrito).length > 0) {

        Swal.fire({
            title: '¿Seguro que desea vaciar el carrito?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Sí',
            denyButtonText: `No`,
        }).then((result) => {

            if (result.isConfirmed) {
                console.log("Se procede a borrar los datos.")
                localStorage.clear()
                limpiarListaCarrito()
                Swal.fire('Carrito vaciado!', '', 'success')

            } else if (result.isDenied) {
                Swal.fire('Tu carrito sigue vivo!', '', 'info')
            }
        })
    }
}

function limpiarListaCarrito () {

    tituloCarrito.style.display = 'none'
    let tabla = document.querySelector("#carrito")
    tabla.innerHTML = ""

}

function agregarAlCarrito(id) {
    const paquete = paquetes.find(paq => paq.numeroPaquete == id)
    carrito.push(paquete)
    //console.table(carrito)
    try{

        localStorage.setItem("carrito", JSON.stringify(carrito))
        mostrarMensaje('Agregado','Se agregó paquete de clases al carrito', 'success')
    } catch(error){
        console.log(error)
        mostrarMensaje('No se pudo agregar al carrito','Error: ${error}', 'error')
    }
}

function mostrarMensaje(titulo='Titulo', mensaje='Kingual Education', icono){
    Swal.fire({
        position: 'center',
        icon: icono,
        showConfirmButton: false,
        title: titulo,
        text: mensaje,
        timer: 1500
      })
}

function cargarPaquetes(array) {

    let fila = ""
    tabla.innerHTML = ""

    if (array.length === 0) return

    array.forEach(paquete => {

        //OPERADORES AVANZADOS
        /**
         * *
         * DESESTRUCTURACION *
         *                 * *
                             **/

        let { numeroPaquete, nombre, precio } = paquete
        const precioIVA = parseFloat(precio * IVA).toFixed(2);

        fila = `<tr>
                    <td>${numeroPaquete}</td>
                    <td>${nombre}</td>
                    <td> $ ${precio}</td>
                    <td> $ ${precioIVA}</td>
                    <td><button class="btn btn-info" id="btn${numeroPaquete}">+</button></td>
                </tr>`
        //<td> $ ${paquete.precioConIva()}</td>
        tabla.innerHTML += fila
    })
    eventoEnBotones(array)
    console.table(array)
}





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