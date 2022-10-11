const IVA = 1.21
const paquetes = [];
let carrito = [];

function llenarArrayPaquetes() {

    paquetes.push(new Paquete(1, "Full Kingual", 29.90));
    paquetes.push(new Paquete(2, "Regular Kingual", 19.90));
    paquetes.push(new Paquete(3, "Starter Kingual", 9.90));
    paquetes.push(new Paquete(4, "Leccion individual Kingual", 7.90));
    paquetes.push(new Paquete(5, "30 min express Kingual c/Q&A", 5.90));
    paquetes.push(new Paquete(6, "30 min express Kingual c/Whatsapp review", 4.90));
    paquetes.push(new Paquete(7, "30 min express Kingual regular", 3.90));
}


llenarArrayPaquetes();
//mostrarPaquetes();

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
    let posicion = prompt("Indica el paquete a quitar a partir de su indice:")
    let indice = paquetes.find(posicion)
    let resultado = new Paquete(0,"",0)

     indice > -1 ? resultado = paquetes.splice(indice, 1) : console.warn(" ⛔ No se ha encontrado el Paquete de clases:", posicion)
       
    
}

