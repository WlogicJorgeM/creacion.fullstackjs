class Persona{
    nombre: string;
    edad: number;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar():void{
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`);
    }

}

const persona1 = new Persona("juan", 30);
console.log(persona1);
persona1.saludar();

//interface

interface Animal{
    nombre:string;
    edad:number;
    sonido():void;
}

const perro:Animal ={
    nombre:"Max",
    edad:3,
    sonido:function():void{
        console.log("Guau guau")
    }
}

perro.sonido()
console.log(perro)


type Producto = {
    nombre:string;
    precio:number;
    stock:number;
}

const computador:Producto = {
    nombre:"Computador",
    precio: 10000,
    stock:10
}

console.log(computador)

enum Colores{
    Rojo = "rojo",
    Verde = "verde",
    Azul = "azul"
}

const color:Colores = Colores.Rojo;
console.log(color)

enum Direccion{
    norte,
    sur,
    este,
    oeste
}

function mover(direccion:Direccion):void{
    console.log(`moviendo hacia el ${Direccion[direccion]}`)
}

mover(Direccion.norte)

let numeros: number[] = [1,2,3,5]
console.log(numeros)

numeros.forEach((numero:number) => {
    console.log(numeros)
})