// ALCANCE - SCOPE VARIABLES 
/*
Global (ambito global)
function (ambito local o de funcion)
Block Scope (ambito de bloque)
*/

//Global

let globalVar = "SOY UNA VARIABLE GLOBAL";

function mostrarGlobal(){
    console.log(globalVar)
}

console.log(globalVar)

//Function scope

function miFuncion(){
    let localVar = "soy una variable local"
    console.log(localVar)
}

//block scope {}=> funciones, ciclos, condicionales

if(true){
    let bloqueVar = "soy una variable de bloque"
    console.log(bloqueVar)
}

for(var i = 0; i < 5; i++){
    console.log(i)
}

let i= 10
console.log(i)

/* 
var ambito de funcion 
let ambito de bloque 
const ambito de bloque
*/
