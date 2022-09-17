// Exercise 4:

console.log("Exercise 4:");

// a- Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
//     mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

var randomNumber = Math.random();
if(randomNumber >= 0.5)
    {
        alert("Greater than 0,5");
    }else
    {
        alert("Lower than 0,5");
    }
console.log("a- The random number is: " + randomNumber);

// b- Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
//     1 “Bebe” si la edad es menor a 2 años;
//     2 “Niño” si la edad es entre 2 y 12 años;
//     3 “Adolescente” entre 13 y 19 años;
//     4 “Joven” entre 20 y 30 años;
//     5 “Adulto” entre 31 y 60 años;
//     6 “Adulto mayor” entre 61 y 75 años;
//     7 “Anciano” si es mayor a 75 años.

var age = 27;
if(age <2)
    {
        alert("Bebe");
    }
if(age >= 2 && age <= 12)
    {
        alert("Niño");
    }
if(age >= 13 && age <= 19)
    {
        alert("Adolescente");
    }
if(age >= 20 & age <= 30)
    {
        alert("Joven");
    }
if(age >= 31 && age <= 60)
    {
        alert("Adulto");
    }
if(age >= 61 && age <= 75)
    {
        alert("Adulto mayor");
    }
if(age >= 75)
    {
        alert("Anciano");
    }
console.log("b- The age is: " + age);