/* 
javascript - es un lenguaje debilmente tipado o dinamico

tipos de datos 

number
string 
boolean
object
function
undefined
symbol
*/

//number
let edad = 15
console.log(edad)
console.log(typeof edad) // me muestra en la consola el tipo de dato

//string - cadena de caracteres
//las cadenas tienen acceso unico y son inmutables 
let nombre = "juan"
console.log(nombre[0])

for(let i = 0;1 <nombre.length; i++){
    console.log(i)
}

// tildes o backticks
let apellido = "perez"

let saludo = `hola ${nombre} ${apellido} y tengo ${edad} años`

let saludo2 = "hola soy " + nombre + "" + apellido + "" + "y tengo " + edad + "años"; // concatenado

//boolenaos - datos logicos 
let sesion = false

if(sesion){
    console.log("sesion iniciada")
}else{
    console.log("sesion no iniciada")
}

//undefined variable declarada sin valor
let estatura
console.log(estatura)

//null ausencia de un valor 
let edad2 = null;
console.log(edad2)

//symbol
let id = Symbol("mi simbolo") //representacion unida de una variable
console.log(id)

//BigInt
let n = BigInt(43567898765467876564678976556788765)
console.log(n)

//tipos de datos de referencia (objetos,arrays,date,regexp,map....) las clases 

class persona{
    constructor(nombre, apellido){
        this.nombre = nombre 
        this.apellido = apellido
    }
}

let persona1 = new Persona("Jorge", "Morales")

let lista = [1,2,3,4,5,6]
console.log(lista)

const usuario ={
    nombre: "juan",
    apellido: "perez",
    [id]:"1234" // identificador unico inmutable
}
console.log(usuario.nombre)
console.log()