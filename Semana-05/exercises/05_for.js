// Exercise 5:

console.log("Exercise 05:");

// a- Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una
//     alerta utilizando cada una de las palabras.

var words5a = ["Hello", "my", "name", "is", "Guido."];
for (i = 0; i < 5; i++) {
    alert("5-a- "+ words5a[i]);
}
console.log("a- The array is: " + words5a);

// b- Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
// modificada.

var words5b = [];
for (i = 0; i < 5; i++) {
    if (words5a[i].substring(0, 1) != words5a[i].substring(0, 1).toUpperCase()) {
        words5b[i] = words5a[i].substring(0, 1).toUpperCase() + words5a[i].substring(1).toLowerCase();
        alert("5-b- "+ words5b[i]);
    }
    else {
        words5b[i] = words5a[i];
    }
}
console.log("b- The new array is: " + words5b);

// c- Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle
//     for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena
//     completa.

var sentence = [];
for (i = 0; i < 5; i++) {
    sentence[i] = words5a[i];
}
alert("5-c- "+ sentence);
console.log("c- The sentence array is: " + sentence);

// d- Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es
//     decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta
//     al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

var numbers = [];
for (i = 0; i < 10; i++) {
    numbers[i] = i;
}
console.log("d- The array of numbers is: " + numbers);