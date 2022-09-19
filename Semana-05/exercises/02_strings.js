// Exercise 2

console.log("Exercise 2:");

// a- Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
//     toUpperCase).

var text2a = "this text should be displayed in uppercase";
console.log("a- The text in uppercase is: " + text2a.toUpperCase());

// b- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
//     guardando el resultado en una nueva variable (utilizar substring).

var text2b = "Now show the first 5 characters of this string";
console.log("b- The first 5 characters are: " + text2b.slice(0, 5))

// c- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
//     guardando el resultado en una nueva variable (utilizar substring).

var text2c = "Now show the last 3 characters of this string";
console.log("c- The last 3 characters are: " + text2c.slice(-3));

// d- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
//     mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
//     toLowerCase y el operador +).

var text2d = "oNlY tHe FiRsT lEttEr Of ThIs StRiNg ShOuLd Be DiSpLaYeD iN uPpErCaSe";
var text2dFirtChar = text2d.substring(0, 1).toUpperCase();
var text2dRest = text2d.substring(1).toLowerCase();
var text2dFirstUppercase = text2dFirtChar + text2dRest;
console.log("d- The string with the only first letter in uppercase is: " + text2dFirstUppercase);

// e- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
//     primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var text2e = "There should be an espace";
var text2eFirstSpace = text2e.indexOf(" ");
console.log("e- The first space is in the position: " + text2eFirstSpace);

// f- Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
//     Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
//     palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
//     operador +).

var text2f = "checKBoXes hyPnoTIzeD";
var text2fFirstSpace = text2f.indexOf(" ");
var word1 = text2f.substring(0, text2fFirstSpace + 1);
var word2 = text2f.substring(text2fFirstSpace + 1);
var word1FirstLetter = word1.substring(0, 1);
var word1Rest = word1.substring(1);
var word2FirstLetter = word2.substring(0, 1);
var word2Rest = word2.substring(1);
var word1FirstUppercase = word1FirstLetter.toUpperCase() + word1Rest.toLowerCase();
var word2FirstUppercase = word2FirstLetter.toUpperCase() + word2Rest.toLowerCase();
console.log("f- The string with the first letter of each word in uppercase is: " + word1FirstUppercase
    + word2FirstUppercase);
