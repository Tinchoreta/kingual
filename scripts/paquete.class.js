class Paquete {
    constructor(id, numeroPaquete, nombre, precio) {
        this.id = id;
        this.numeroPaquete = numeroPaquete;
        this.nombre = nombre;
        this.precio = precio;
    }

    precioConIva() {
        return parseFloat( this.precio * IVA).toFixed(2);
    }
}
