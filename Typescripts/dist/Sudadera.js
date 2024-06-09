"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Camiseta_1 = require("./Camiseta");
class Sudadera extends Camiseta_1.Camiseta {
    constructor(color, modelo, marca, talla, precio, capucha) {
        super(color, modelo, marca, talla, precio); // Llama al constructor de la clase padre
        this.capucha = capucha;
    }
    setCapucha(capucha) {
        this.capucha = capucha;
    }
    getCapucha() {
        return this.capucha;
    }
}
var sudaderaNike = new Sudadera("", "", "", "", 5, true);
