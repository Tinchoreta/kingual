const paquetes = [];

function llenarArrayPaquetes() {

    paquetes.push(new Paquete(1, "Full Kingual", 29.90));
    paquetes.push(new Paquete(2, "Regular Kingual", 19.90));
    paquetes.push(new Paquete(3, "Starter Kingual", 9.90));
    paquetes.push(new Paquete(4, "Leccion individual Kingual", 7.90));
    paquetes.push(new Paquete(4, "30 min express Kingual", 5.90));
}


function mostrarPaquetes() {
    for (const paquete of paquetes) {
        alert(paquete.nombre);
    }
}

llenarArrayPaquetes();
mostrarPaquetes();

function agregarPaquete() {
    let nuevoPaquete = prompt("Ingresa un nuevo Paquete:")
    let resultado = Paquetes.includes(nuevoPaquete)
    if (resultado === false) {
        Paquetes.push(nuevoPaquete)
        console.table(Paquetes)
    } else {
        console.warn("El Paquete ingresado ya existe en el array.")
    }
}

function removerUltimoPaquete() {
    Paquetees.pop()
    console.table(Paquetees)
}

function quitarPaquete() {
    let posicion = prompt("Indica el país a quitar:")
    let indice = Paquetees.indexOf(posicion)
    if (indice > -1) {
        let resultado = Paquetees.splice(indice, 1)
        console.log(resultado)
        console.table(Paquetees)
    } else {
        console.warn("No se ha encontrado el Paquete de clases:", posicion)
    }
}

function fusionar() {
    const paquetesPremium = Paquetes.concat(paquetesExpress)
    console.table(paquetesPremium)
}