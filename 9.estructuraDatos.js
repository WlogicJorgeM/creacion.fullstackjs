/*
estructura de datos en js > colecciones de datos 
1. arrays - colecciones ordenadas, indexadas, se puede duplicar. se puede listar se puede iterar y manipular 
2. set - colecciones que no son ordenadas, no son indexadas, no se puede duplicar, no se puede iterar y manipular
3. map - colecciones no ordenadas, permiten almacenar datos apartir de claves y valores. se puede listar, iterar y manipular 
*/

//Arrays
let numeros = [1,2,3,4,5,6,7,8,9,10]
console.log(numeros) //arrays de numeros 

let letras = ["a","b","c"]
console.log(letras)

let mezcla = ["a",1,true]
console.log(mezcla)

// iterar arrays
for(let i = 0; i < numeros.length; i++){
    console.log(numero[i])
}

//metodos para manipular arrays
//foreach - recorre array
letras.forEach((letra)=>{
    console.log(`letra ${letra}`)
})

//map -- recorre el array y devuelve uno nuevo 
let dobles = numeros.map((numero)=>{
    return numero * 2
})
console.log(numeros)
console.log(dobles)

//filter -- recorre el array y devuelve un nuevo con filtro

let pares = numeros.filter((numero)=>{
    return numero % 2 === 0
})

console.log(pares)

//find -- recorrer y busca un valor 

let busqueda = numeros.find((numero) =>{
    return numero === 5
})

console.log(busqueda)

//metodos para manipular array 
// push- agrega un elemento al fijnal del array 
numeros.push(11)
console.log(numeros)
//eliminar el ultimo elemento del array
numeros.pop()
console.log(numeros)
//eliminar el primer elemento
numeros.shift()
console.log(numeros)
//agregar un elemento al inicio
numeros.unshift(100)
console.log(numeros)

//sets

let conjunto = new Set([1,1,2,3,4,6,7])
console.log(conjunto) // no tiene en cuenta los valores duplicados

//metodos para amnipular los sets
//add -- agr4egar un elemento 
conjunto.add(8)
console.log(conjunto)
//eliminar un elemento 
conjunto.delete(2)
console.log(conjunto)
//verificar la existencia de un dato
console.log(conjunto.has(8))
console.log(conjunto.has(4))
//recorrer un conjunto
conjunto.forEach((numero)=>{
    console.log(numero)
})
//conocer el tamaño del set
console.log(conjunto.size)

//maps 

let mapa = new Map()
mapa.set("nombre", "juan")
console.log(mapa)
mapa.set("apellido","perez")
mapa.set("edad","30")
mapa.set(100,"cien")
console.log(mapa)
//obtener un valor 
console.log(mapa.get("apellido"))
console.log(mapa.get(100))
//verificar la existencia de un dato
console.log(mapa.has("nombre"))
//eliminar 
mapa.delete("edad")
console.log(mapa)
//recorrer un mapa 
mapa.forEach((valor,clave)=>{
    console.log(`clave: ${clave} - valor ${valor}`)
})
//conocer el tamaño
console.log(mapa.size)  