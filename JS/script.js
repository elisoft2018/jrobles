/**
 * @argument salon funcion para consultar los alumnos de un salon
 */
/*
//tipos de datos

// tipo de dato boolean
var verificado = false;
//negacion
!verificado
//and &&
verificado && false;
//or ||
verificado || false;

//tipo de dato numerico
var edad = 15;
var peso = 55.63;
var latitud = 4.23566;
//incremento
edad++;
//decremento
edad--;
//math para trabajar operaciones con numeros
var numeroAleatorio = Math.random() * 100;
var potencia = Math.pow(10, 5);
var logaritmo = Math.log10(1000);

console.log(numeroAleatorio, potencia);
console.log(logaritmo);
//alert("logaritmo en base 10 del numero ingresado es ",logaritmo);
console.log("no esta verificado?", !verificado);

//tipo de dato string

var nombre = "Juan Carlos Rivera"
console.log(nombre);

// arreglos
var estudiante = ["Jose", "Carlos", "Pedro", "Lucas"];
console.log(estudiante[2]);
var numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(numero[2]);

//objetos key:value
var datosEstudiante = {
    nombre: "Jose",
    apellido: "Robles",
    edad: 25,
    telefono: 3204568523,
    direccion: "calle 56 #87-36",
    casa: [
        {
            direccion: "calle 56 #87-56",
            habita: false
        },
        {
            direccion: "calle 56 #98-36",
            habita: true
        },
        {
            direccion: "calle 56 #100-36",
            habita: false
        }
    ]
}
console.log(datosEstudiante);

//bucles
for (var i = 0; i < 50; i++) {
    console.log(i);


}
console.log("Icremento de 2 en 2")
for (var i = 0; i < 50; i = i + 2) {

    console.log(i);


}

//recorrer el arreglo for normal
for (var i = 0; i < estudiante.length; i++) {
    console.log(estudiante[i]);

}

//recorrer arreglo for each
console.log("ciclo for each con in")
for (i in estudiante) {
    console.log(i);

}

console.log("ciclo for each con of")

for (var i of estudiante) {
    console.log(i);
}
//funciones
console.log("funciones")
var mifuncion = function (arg1, arg2, arg3) {

    return arg1 + arg2 + arg3;

}

console.log("el resultado es = " + mifuncion(2, 3, 5));
console.log("el resultado es = " + mifuncion("Juan", 3, 5));*/


//ejercicio palindromos
console.log("Verificar Palindromo");
//var frase=prompt("Digite la frase para verificar si es palindromo")
function esPalindromo(frase) {
    //se eliminan los espacios de la frase
    frase = frase.replace(/ /g, "");
    //imprimo la frase,la cual quedo como una sola cadena de texto(palabra)
    console.log(frase);
    /*generamos un arreglo inverso de la frase, y lo concatenamos con join para que quede como una sola cadena de texto(palabra)
     y poderlo comparar con la cadena que se generó al inicio cuando se eliminaron los espacios
    .*/
    var fraseInversa = frase.split("").reverse().join("");
    //imprimo la frase inversa generada
    console.log(fraseInversa);
    //comparo si la palabra inicial es igual a la palabra inversa 
    if (frase == fraseInversa) { 
        //imprimir en consola el mensaje con el resultado de la validación
        console.log("La palabra '" + frase + "' SI es un palindromo");
        //Se muestra mensaje emergente con el resultado de la validación
        //alert("La palabra '" + frase + "' SI es un palindromo");
      //retorno verdadero para el caso afirmativo
        return (true); 
    } else {
        //imprimir en consola el mensaje con el resultado de la validación
        console.log("La palabra '" + frase + "' NO es un palindromo");
        //Se muestra mensaje emergente con el resultado de la validación.
        //alert("La palabra '" + frase + "' NO es un palindromo");

        //retorno falso para el caso donde no lo es
        return (false); 
    }
}
