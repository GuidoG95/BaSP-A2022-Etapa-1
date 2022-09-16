// Exersice 3:

console.log("Exercise 3:");

// a- Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
//     "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"];
console.log("a- The month 5 is: " + months[5-1] + " and the month 11 is: " + months[11-1]);

// b- Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log("b- The months in alphabetical order are: " + months.sort());

// c- Agregar un elemento al principio y al final del array (utilizar unshift y push).

months.unshift("Hello");
months.push("Goobye");
console.log("c- The array with one new element at the front and at the back is: " + months);

// d- Quitar un elemento del principio y del final del array (utilizar shift y pop).

months.shift();
months.pop();
console.log("d- The array without the elements added in point c is: " + months);

// e- Invertir el orden del array (utilizar reverse).

console.log("e- The inverted array is: " + months.reverse());

// f- Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log("f- The elements of the previous array joined in one string spaced with '-' are: " + months.join("-"));

// g- Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"];
console.log("f- The sliced array is: " + months.slice(4, 11));