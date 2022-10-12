
const botonVerCarrito = document.getElementById("idBtnVerCarrito")
const tituloCarrito = document.getElementById("tituloCarrito")

botonVerCarrito.addEventListener("click", () =>
    {
    swal("Recuperando carrito")
   // recuperarCarrito()
    recuperoCarrito()
    }
    )

/* function recuperarCarrito() {

    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
} */


function eventoEnBotones() {

    debugger
    paquetes.forEach(paq => {
        const btn = document.querySelector(`#btn${paq.numeroPaquete}`)
        btn.addEventListener("click", () => agregarAlCarrito(`${paq.numeroPaquete}`))
    })
}


function recuperoCarrito() {
    debugger
    let carrito = JSON.parse(localStorage.getItem("carrito"))

    //OPERADOR AND
    if ((typeof carrito !== 'undefined' && typeof carrito !== 'null') && carrito !== null ) {

        carrito.length === 0 && alerta("No se encontro carrito en almacenamiento")
        
        tituloCarrito.style.display = 'block'

        let tabla = document.querySelector("#carrito")
        carrito.forEach(paq => {
            let fila = `<tr>
                            <td>${paq.nombre}</td>
                            <td>$ ${paq.precio}</td>
                            
                        </tr>`
            tabla.innerHTML += fila
        });
    } else{
        console.log(carrito)
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
    debugger
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

function limpiarListaCarrito(){
    debugger
    tituloCarrito.style.display = 'none'
    let tabla = document.querySelector("#carrito")
    tabla.innerHTML=""

}

function agregarAlCarrito(id) {
    const paquete = paquetes.find(paq => paq.numeroPaquete == id)
    carrito.push(paquete)
    //console.table(carrito)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

