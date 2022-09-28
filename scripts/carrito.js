function recuperoCarrito() {
    //debugger
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("#carrito")
        carrito.forEach(paq => {
            let fila = `<tr>
                            <td>${paq.nombre}</td>
                            <td>$ ${paq.precio}</td>
                            
                        </tr>`
                        tabla.innerHTML += fila
        });
}
recuperoCarrito()

function eventoEnBotones() {

    debugger
    paquetes.forEach(paq => {
        const btn = document.querySelector(`#btn${paq.numeroPaquete}`)
              btn.addEventListener("click", ()=> agregarAlCarrito(`${paq.numeroPaquete}`))
    })
}
eventoEnBotones()

function agregarAlCarrito(id) {
    const paquete = paquetes.find(paq => paq.numeroPaquete == id)
          carrito.push(paquete)
          //console.table(carrito)
          localStorage.setItem("carrito", JSON.stringify(carrito))
}

function recuperarCarrito() {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
}
recuperarCarrito()