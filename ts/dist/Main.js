import Camiseta from './ObjetoTypescript';
var Main = /** @class */ (function () {
    function Main() {
        console.log("prueba de conexion");
    }
    return Main;
}());
var main = new Main();
var camiseta = new Camiseta();
camiseta.setCamiseta("rojo", "modelo", "xl", "nike", 5000);
console.log("prueba");
