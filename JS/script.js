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
console.log("Verificar Palindromo")

var funcionPalindromos = function (frase) {
   
    //convertir la frase ingresada en letra minuscula
    console.log("Frase en minusculas");
    var cadenaOriginal = frase.toLowerCase();
    console.log(cadenaOriginal);
    //se quitan los espacios de la frase
    console.log("Frase en minusculas sin espacios");
    cadenaOriginal.replace(/ /g, "");
    /*console.log(cadenaOriginal);
    //se crea el arreglo con los elementos que componen la frase
    console.log("Arreglo de la frase  ingresada")
    var arrayCadenaOriginal = cadenaOriginal.split('');
    console.log(arrayCadenaOriginal);
    //se genera el arreglo al reves 
    console.log("Arreglo de la frase  ingresada al reves");
    var arrayCadenaReves = cadenaOriginal.split('').reverse();
    //arrayCadenaReves.reverse();
    console.log(arrayCadenaReves);
    //se declara variable inicilizada en true para manejar el resultado de la comparación
     var resultado = true;
     //se recorre el arreglo que se genera con la frase ingresada arrayCadenaOriginal
     for (i in arrayCadenaOriginal) {
        //se compara cada uno de los elementos 1-1 del arrayCadenaOriginal con los elementos del arrayCadenaReves.
         if (arrayCadenaOriginal[i] == arrayCadenaReves[i]) {

       

         } else {

         resultado = false;
         }

     }

     if(resultado) {
		resultado += " es un palindromo";
	}
	else {
		resultado += " no es un palindromo";
	}
	
    return resultado;
    
      /* //se recorre el arreglo que se genera con la frase ingresada arrayPalindromo
    for (var i = 0; i <= arrayPalindromo.length; i++) {
        // se recorre el arreglo arrayPalindromoReves reves  que se genero con la funcion reverse
        for (var x = 0; x <= arrayPalindromoReves.length; x++) {
            //se compara cada uno de los elementos del array inicial, frente al arreglo que se genero al reves arrayPalindromoReves
            if (arrayPalindromo[i] == arrayPalindromoReves[x]) {

                console.log("es palindromo");



            } else {


                console.log("es palindromo");

            }


        }




    }*/

    
}