//objetos en typescript
//se agrega export para poder exportar la clase a otras clases
export default class Camiseta {
    //constructor
    constructor() {
        this.color = "";
        this.modelo = "";
        this.talla = "";
        this.marca = "";
        this.precio = 0;
    }
    cambiarColor(dato) {
        this.color = dato;
    }
    getCamiseta() {
        return {
            color: this.color,
            modelo: this.modelo,
            talla: this.talla,
            marca: this.marca,
            precio: this.precio
        };
    }
    setCamiseta(color, modelo, talla, marca, precio) {
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.marca = marca;
        this.precio = precio;
    }
}
var primeraCamiseta = new Camiseta();
primeraCamiseta.cambiarColor("azul");
console.log(primeraCamiseta);
