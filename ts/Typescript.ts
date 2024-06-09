document.addEventListener("DOMContentLoaded", function () {

    //TIPOS DE DATOS

    var dato1: string = "string";
    var dato2: number = 5;
    var dato3: boolean = true;
    //este dato puede almacenar valores cadena o numericos
    var dato4: string | number = 5;
    //este dato puede almacenar cualquier tipo de dato
    var dato5: any = "lo que sea";



    //funcion    
    function mostrar(dato: any) {
      console.log(dato);
    }

});



