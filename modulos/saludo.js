// modularizar variables, funciones, clases

//variables

export let saludo = "esto es una varibale de un modulo"

export function saludar(nombre){
    console.log("hola"+ nombre)
}

export class Persona{
    constuctur(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log("hola" + this.nombre)
    }
}