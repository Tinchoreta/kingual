class Paquete {
    constructor(numeroPaquete, nombre, precio) {
        this.numeroPaquete = numeroPaquete;
        this.nombre = nombre;
        this.precio = precio;
    }

    precioConIva() {
        return parseFloat( this.precio * IVA).toFixed(2);
    }
}
