import Camiseta from './ObjetoTypescript';
class Main {
    constructor() {
        console.log("prueba de conexion");
    }
}
const main = new Main();
const camiseta = new Camiseta();
camiseta.setCamiseta("rojo", "modelo", "xl", "nike", 5000);
console.log("prueba");
