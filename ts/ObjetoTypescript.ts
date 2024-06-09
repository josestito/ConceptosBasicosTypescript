//objetos en typescript
//se agrega export para poder exportar la clase a otras clases
export default class Camiseta {
    private color: string;
    private modelo: string;
    private talla: string;
    private marca: string;
    private precio: number;

    //constructor
    constructor() {
        this.color = "";
        this.modelo = "";
        this.talla = "";
        this.marca = "";
        this.precio = 0;
    }

    public cambiarColor(dato: string) {
        this.color = dato;
    }

    public getCamiseta() {
        return {
            color: this.color,
            modelo: this.modelo,
            talla: this.talla,
            marca: this.marca,
            precio: this.precio
        };
    }

    public setCamiseta(color: string, modelo: string, talla: string, marca: string, precio: number) {
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
