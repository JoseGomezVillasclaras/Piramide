'use strict'
//Pedimos el nº de cuadro donde escribir
/*
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
*/
// La cosa era asignar una funcion para cambiar el color del cuadro en el onclick
//Arrays
//var colorFr=['yellow','red','blue','pink','violet']

var colorFr= new Array('yellow','red','blue','pink','violet');
/*
colorFn[0] = 'grey';
colorFn[1] = 'blue';
colorFn[2] = 'black';
colorFn[3] = 'yellow';
colorFn[4] = 'red';
*/
var colorFn = new Array(
    'white',
    'blue',
    'black',
    'yellow',
    'red'
)

function pinturaInicial() {
    for ( var i = 0; i < 6; i++) {
        let identificador="c"+(i+1);
        let elemento = document.getElementById(identificador)
        elemento.style.backgroundColor=colorFn[i];
        elemento.style.color=colorFn[i];
    }
}

var color = 'white';
/*
function eligeColor() {
    color = prompt("Di que color quieres que sea el saludo(Rojo, Azul, Verde , Rosa)")
    switch (color) {
        case 'Rojo':
            color = 'red';
            break;
        case 'Azul':
            color = 'blue';
            break;
        case 'Verde':
            color = 'green';
            break;
        case 'Rosa':
            color = 'pink';
            break;
        default:
            color = 'black'; //Lo pongo en caso de error
            break;

    }
}
*/
function cambiarColor(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.color = color;

    let a;
    a++;
    switch (a) {
        case 1:

            color = 'blue';
            break;
        case 2:

            console.log("abcda");
            cuadro.style.color = 'red';
            break;
        case 3:
            cuadro = 'green';
            break;
        default:
            color = 'blue'; //Lo pongo en caso de error
            break;
    }

    cuadro.innerHTML = "Hola";



}
function saludar(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);

    cuadro.innerHTML = "Hola";
}

pinturaInicial();

eligeColor();
/*
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
*/