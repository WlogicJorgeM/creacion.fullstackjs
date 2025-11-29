import { saludo, saludar, Persona } from "./modulos/saludo.js";
import operacion from "./modulos/operaciones.js"

console.log(saludo)
saludar("juan")

let persona1 = new Persona("jhon", 45)
persona1.saludar()

console.log("el salario es: " + operacion(10, 2000))