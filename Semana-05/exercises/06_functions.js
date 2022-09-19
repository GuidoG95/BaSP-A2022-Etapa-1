// Exercise 6:

console.log("Exercise 06:");

// a- Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
//     resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function mySumaA(a, b) {
    var c = a + b;
    console.log("a- The result of " + a + " + " + b + " is: " + c);
}
var numberOne = 4;
var numberTwo = 45;
mySumaA(numberOne, numberTwo);

// b- A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; de
//     no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como
//     resultado.

function mySumaB(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return (a + b);
    }
    else {
        alert("6-b- One or both of the parameters is not a number.");
        return ("NaN");
    }
}
var numberOne = "hi";
var numberTwo = 45;
console.log("b- The result of: " + numberOne + " + " + numberTwo + " is: " + mySumaB(numberOne, numberTwo));

// c- Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número
//     entero.

function validateInteger(a) {
    if (Number.isInteger(a)) {
        return ("True");
    }
    else {
        return ("False");
    }
}
var number = 5;
console.log("c- " + validateInteger(number));

// d- A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los
//     números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a
//     entero (redondeado).

function mySumaD(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        if (validateInteger(a) == "False") {
            a = Math.round(a);
            alert("6-d- The number was not an integer, it is now rounded to: " + a);
        }
        if (validateInteger(b) == "False") {
            b = Math.round(b);
            alert("6-d- The number was not an integer, it is now rounded to: " + b);
        }
        return (a + b);
    }
    else {
        alert("6-d- One or both of the parameters is not a number.");
        return ("NaN");
    }
}
var numberOneD = 5.1;
var numberTwoD = 6.7;
console.log("d- The rounded result of " + numberOneD + " + " + numberTwoD + " is: " + mySumaD(numberOneD, numberTwoD));

// e- Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
//     que todo siga funcionando igual.

function validateNumberE(a) {
    if (typeof a == "number") {
        if (!Number.isInteger(a)) {
            a = Math.round(a);
            alert("6-e- The number was not an integer, it is now rounded to: " + a);
            return (a);
        }
        else {
            return ("NaN");
        }
    }
    else {
        alert("6-e- One or both of the parameters is not a number.");
        return ("NaN");
    }
}
function mySumaE(c, d) {
    return (validateNumberE(c) + validateNumberE(d));
}
var numberOneE = 5.1;
var numberTwoE = 6.7;
console.log("e- The rounded result of " + numberOneE + " + " + numberTwoE + " is: " + mySumaE(numberOneE, numberTwoE));