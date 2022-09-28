
function llenarArrayPaquetes() {

    paquetes.push(new Paquete(1, "Full Kingual", 29.90));
    paquetes.push(new Paquete(2, "Regular Kingual", 19.90));
    paquetes.push(new Paquete(3, "Starter Kingual", 9.90));
    paquetes.push(new Paquete(4, "Leccion individual Kingual", 7.90));
    paquetes.push(new Paquete(5, "30 min express Kingual c/Q&A", 5.90));
    paquetes.push(new Paquete(6, "30 min express Kingual c/Whatsapp review", 4.90));
    paquetes.push(new Paquete(7, "30 min express Kingual regular", 3.90));
}


function mostrarPaquetes() {
    for (const paquete of paquetes) {
        console.log(paquete.nombre);
    }
}

llenarArrayPaquetes();
mostrarPaquetes();

function agregarPaquete() {
    debugger
    let nuevoPaquete = prompt("Ingresa un nuevo Paquete:")
    let resultado = paquetes.find(resultado => resultado.nombre === nuevoPaquete)
    
    if (typeof resultado === 'undefined') {
        paquetes.push( new Paquete (paquetes.length, nuevoPaquete, 100))
        console.table(paquetes)
    } else {
        console.warn("El Paquete ingresado ya existe en el array.")
    }
}

function removerUltimoPaquete() {
    paquetes.pop()
    console.table(paquetes)
}

function quitarPaquete() {
    let posicion = prompt("Indica el paquete a quitar:")
    let indice = paquetes.find(posicion)
    if (indice > -1) {
        let resultado = paquetes.splice(indice, 1)
        console.log(resultado)
        console.table(paquetes)
    } else {
        console.warn("No se ha encontrado el Paquete de clases:", posicion)
    }
}

function eventoEnBotones() {
    paquetes.forEach(paq => {
        const btn = document.querySelector(`#btn${paq.numeroPaquete}.btn.btn-info`)
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