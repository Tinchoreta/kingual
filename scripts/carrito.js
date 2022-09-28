function recuperoCarrito() {
    //debugger
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("tbody")
        carrito.forEach(prod => {
            let fila = `<tr>
                            <td>${prod.nombre}</td>
                            <td>$ ${prod.importe}</td>
                        </tr>`
                        tabla.innerHTML += fila
        });
}
recuperoCarrito()