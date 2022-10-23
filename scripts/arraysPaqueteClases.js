const IVA = 1.21
const paquetes = [];
let carrito = [];
const URL = "../bbdd/paquetes.json"

const llenarArrayPaquetes = 

        /*FETCH*/

    async () => {
        debugger
        try {
            const response = await fetch(URL)
            const data = await response.json()
            paquetes.push(...data) //SPREAD 
            
        }
        catch (error) {
            console.log(error)
        }
        finally {
            console.table(paquetes)
        }
    }



    document.addEventListener("DOMContentLoaded", async ()=> {
        const espero = await llenarArrayPaquetes()
        cargarPaquetes(paquetes)
        eventoEnBotones()       
    })



function agregarPaquete() {
    debugger
    let nuevoPaquete = prompt("Ingresa un nuevo Paquete:")
    let resultado = paquetes.find(resultado => resultado.nombre === nuevoPaquete)

    if (typeof resultado === 'undefined' && resultado.length != 0) {
        paquetes.push(new Paquete(paquetes.length, nuevoPaquete, 100))
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
    let resultado = new Paquete(0, "", 0)

    indice > -1 ? resultado = paquetes.splice(indice, 1) : console.warn(" ⛔ No se ha encontrado el Paquete de clases:", posicion)


}

