var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad));
    };
    return Persona;
}());
var persona1 = new Persona("juan", 30);
console.log(persona1);
persona1.saludar();
var perro = {
    nombre: "Max",
    edad: 3,
    sonido: function () {
        console.log("Guau guau");
    }
};
perro.sonido();
console.log(perro);
var computador = {
    nombre: "Computador",
    precio: 10000,
    stock: 10
};
console.log(computador);
var Colores;
(function (Colores) {
    Colores["Rojo"] = "rojo";
    Colores["Verde"] = "verde";
    Colores["Azul"] = "azul";
})(Colores || (Colores = {}));
var color = Colores.Rojo;
console.log(color);
var Direccion;
(function (Direccion) {
    Direccion[Direccion["norte"] = 0] = "norte";
    Direccion[Direccion["sur"] = 1] = "sur";
    Direccion[Direccion["este"] = 2] = "este";
    Direccion[Direccion["oeste"] = 3] = "oeste";
})(Direccion || (Direccion = {}));
function mover(direccion) {
    console.log("moviendo hacia el ".concat(Direccion[direccion]));
}
mover(Direccion.norte);
var numeros = [1, 2, 3, 5];
console.log(numeros);
numeros.forEach(function (numero) {
    console.log(numero);
});
