"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camiseta = void 0;
class Camiseta {
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
}
exports.Camiseta = Camiseta;
//DECORADOR
function estampar(logo) {
    //AQUI ES DONDE CAPTULA LA CLASE A LA QUE ESTAMOS DECORANDO, ES DECIR, SI USAMOS EL DECORADOR EN LA CLASE
    //CAMISETA, TARGET = CAMISETA
    return function (target) {
        //ACA DENTRO VA LA LOGICA DE QUE ESTAMOS HACIENDO EN ESA CLASE, EN ESTE CASO, LE ESTAMOS AGREGANDO UNA FUNCION, QUE DEVUELVE VOID
        //QUE LO QUE HACE, ES UN CONSOLE.LOG DE UN STRING CONCATENADO CON EL PARAMETRO LOGO.
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
const camiseta1 = new Camiseta("rojo", "prueba", "prueba", "xl", 5000);
