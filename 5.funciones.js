// funcion en js 
//funciones declarativas

function suma(numero1, numero2){
    return numero1 + numero2;
}

function resta(numero1, numero2){
    return numero1 - numero2;
}

console.log(suma(6, 5))
console.log(resta(6, 5))

//funciones nativas

console.log(Math.max(6, 5))
console.log(Math.pow(6, 5))//potencia

let sumar = suma(5,5)
console.log(sumar)

//funciones anonimas, funciones de flecha o expresiones lambda

const multiplicar = (numero1,numero2)=>{return numero1*numero2}

// console.log(multiplicar(5,5))

//funciones autoinvocable
(()=>{
    let numero_funcion = 2
    console.log(numero_funcion+numero_funcion)
})();