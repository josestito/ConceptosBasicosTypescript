//objetos en typescript
//se agrega export para poder exportar la clase a otras clases
var Camiseta = /** @class */ (function () {
    //constructor
    function Camiseta() {
        this.color = "";
        this.modelo = "";
        this.talla = "";
        this.marca = "";
        this.precio = 0;
    }
    Camiseta.prototype.cambiarColor = function (dato) {
        this.color = dato;
    };
    Camiseta.prototype.getCamiseta = function () {
        return {
            color: this.color,
            modelo: this.modelo,
            talla: this.talla,
            marca: this.marca,
            precio: this.precio
        };
    };
    Camiseta.prototype.setCamiseta = function (color, modelo, talla, marca, precio) {
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.marca = marca;
        this.precio = precio;
    };
    return Camiseta;
}());
export default Camiseta;
var primeraCamiseta = new Camiseta();
primeraCamiseta.cambiarColor("azul");
console.log(primeraCamiseta);
