import { Camiseta } from "./Camiseta";

class Sudadera extends Camiseta {

    public capucha: boolean;

    constructor(color: string, modelo: string, marca: string, talla: string, precio: number, capucha: boolean) {
        super(color, modelo, marca, talla, precio); // Llama al constructor de la clase padre
        this.capucha = capucha;
    }




    setCapucha(capucha: boolean) {
    this.capucha = capucha;
}

     getCapucha(): boolean {
    return this.capucha;
    }
}

var sudaderaNike = new Sudadera("","","","",5,true);

