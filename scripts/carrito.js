function recuperoCarrito() {
    //debugger
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("#carrito")
        carrito.forEach(paq => {
            let fila = `<tr>
                            <td>${paq.nombre}</td>
                            <td>$ ${paq.precio}</td>
                            <td>$ ${paq.precioConIva()}</td>
                        </tr>`
                        tabla.innerHTML += fila
        });
}
recuperoCarrito()