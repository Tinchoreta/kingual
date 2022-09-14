
function llenarArrayPaquetes() {

    paquetes.push(new Paquete(1, "Full Kingual", 29.90));
    paquetes.push(new Paquete(2, "Regular Kingual", 19.90));
    paquetes.push(new Paquete(3, "Starter Kingual", 9.90));
    paquetes.push(new Paquete(4, "Leccion individual Kingual", 7.90));
    paquetes.push(new Paquete(4, "30 min express Kingual", 5.90));
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

