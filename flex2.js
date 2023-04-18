'use strict'
//Pedimos el nº de cuadro donde escribir

var numPos = prompt("Diga el cuadro en el que quiere dibujar(1 a 5)", "");
var a = prompt("Diga el color en el que quiere la piramide: 1 Azul, 2 Rojo, 3 Verde", "");
numPos = parseInt(numPos);
a = parseInt(a);
//numPos será una variable númerica entre 1 y 5

var selector = "c" + numPos;
var esteCuadro = document.getElementById(selector);


  

// Variables para la pirámide
let symbol = "o";
let height = 4;

// Crear la pirámide en forma de una cadena de texto
let output = "";
for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += symbol;
    }
    output += row.padStart(Math.floor((height + row.length) / 2), " ") + "<br>";
}

switch(a){
case 1:
    esteCuadro.innerHTML = output;
    esteCuadro.style.color="blue"
break;
case 2:
    esteCuadro.innerHTML = output;
    esteCuadro.style.color="red"
break;
case 3:
    esteCuadro.innerHTML = output;
    esteCuadro.style.color="green"
break;
}