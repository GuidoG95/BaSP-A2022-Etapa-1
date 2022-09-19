// Ejercicio 1

console.log("Exercise 1:")

// a- Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una
//     3er variable.

var number1 = 15;
var number2 = 8;
var add = number1 + number2;
console.log("a- The addition of " + number1 + " and " + number2 + " is: " + add);

// b- Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

var text1b = "My name is: ";
var text2b = "Guido Gentile";
var fullText = text1b + text2b;
console.log("b- " + fullText);

// c- Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el
//     resultado de la suma en una 3er variable (utilizar length).

var text1c = "This is an example text";
var text2c = "This is another text";
var totalCharLength = text1c.length + text2c.length;
console.log("c- The length of both of the strings is: " + totalCharLength);