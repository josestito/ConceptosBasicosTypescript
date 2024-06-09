export class Camiseta {
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

    constructor(color: string, modelo: string, marca: string, talla: string, precio: number) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
}


//DECORADOR
function estampar(logo: string) {
    //AQUI ES DONDE CAPTULA LA CLASE A LA QUE ESTAMOS DECORANDO, ES DECIR, SI USAMOS EL DECORADOR EN LA CLASE
    //CAMISETA, TARGET = CAMISETA
    return function (target: Function) {
        //ACA DENTRO VA LA LOGICA DE QUE ESTAMOS HACIENDO EN ESA CLASE, EN ESTE CASO, LE ESTAMOS AGREGANDO UNA FUNCION, QUE DEVUELVE VOID
        //QUE LO QUE HACE, ES UN CONSOLE.LOG DE UN STRING CONCATENADO CON EL PARAMETRO LOGO.
        target.prototype.estampacion = function (): void {
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
}

const camiseta1 = new Camiseta("rojo", "prueba", "prueba", "xl", 5000);
