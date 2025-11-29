/*
POO > CREACION DE OBJETOS PARA REUTILIZAR EL CODIGO, REPRESENTACIONES A PARTIR DE UN MOLDE O PLANTILLA
 CLASE, OBJETO, MOTODO O PROPIEDAD, PROTOTIPO

 PROTOTIPO: DEFINE UN OBJETA A TRAVEZ DE UNA CLASE 
*/

//creacion de objetos literales
let usuario = {
    correo: "jandres98mt@gmail.com",
    contraseña: "123",
    saludar : function(){
        console.log(`hola soy ${this.nombre}`)
    }
};

console.log(usuario)
usuario.nombre = "jorge morales" // asignando una nueva propiedad
console.log(usuario)

console.log(usuario.nombre) // accedemos a una propiedad del objeto 

usuario.saludar(); // accediendo al metodo o funciones que puede ejecutar un objeto a partir de una clase 

//creacion aparti de la clase object
const persona = new Object();
persona.nombre="jorge"
persona.apellido="morales"
persona.edad =27
persona.saludar=()=>{
    console.log(`hola soy ${persona.nombre}`)
}

console.log(persona);
persona.saludar();

//crear objetos a partir de clases constructoras

function animal(nombre, edad){
    this.nombre = nombre
    this.edad = edad
    this.saludar = ()=>{
        console.log(`hola soy ${this.nombre}`)
    }
}

let perro = new animal("magire",12)
console.log(perro)
perro.saludar()

// crear objetos apartir de clases 

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    //metodos
    saludar(){
        console.log(`hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad}`)
    }
}

let persona1 = new Persona("jorga", "morales", 27)
console.log(persona1.nombre)
console.log(persona1)
persona1.saludar()

//herencia de clases (extends)
class profesor extends Persona{
    constructor(nombre,apellido, edad, salario){
        super(nombre, apellido, edad)
        this.salario = salario 
    }

    mostrarsalario(){
        console.log(`hola soy el profesor ${this.nombre} y me gano ${this.salario}`)
    }
}

let profesor1 = new profesor("lorena", "alayon", 29)
profesor1.salario = 100000
profesor1.saludar()
profesor1.mostrarsalario()

//ancapsular atributos de un objeto atributos privados

class cuenta{
    #saldo
    constructor(saldo){
        this.#saldo = saldo
    }

    setsaldo(saldo){
        if(saldo<0){
            console.error("no se puede asignar un saldo negativo")
        }else{
            this.#saldo = saldo
        }
    }

    getsaldo(){
        return this.#saldo
    }
}

let cuenta_ahorros = new cuenta(100)
console.log(cuenta_ahorros)
//cuenta_ahorros.saldo = -1000 no se puede reescribir el valor privado, crea una nueva tampoco se puede acceder
//console.log(cuenta_ahorros)
cuenta_ahorros.setsaldo(2000)
console.log(cuenta_ahorros.getsaldo())

//closures - se usa para proteger datos 

function crearcuenta(saldo_inicial){
    let saldo = saldo_inicial

    return{
        mostrarsaldo: ()=>{
            console.log(saldo)
        },

        depositar_dinero: (cantidad)=>{
            saldo = saldo + cantidad
        }
    }
}

const Cuenta = crearcuenta(100)
Cuenta.mostrarsaldo()
Cuenta.saldo = 500
console.log(Cuenta)
Cuenta.depositar_dinero(500)
console.log(Cuenta)
Cuenta.mostrarsaldo()



