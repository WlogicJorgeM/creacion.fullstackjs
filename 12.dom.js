// consulta por id 
const titulo_id = document.getElementById("titulo")
console.log(titulo)

//consulta por tagname 
let titulo_elemento = document.getElementsByTagName("h1")
console.log(titulo_elemento)

//consultar por query
let titulo_query = document.querySelector("#titulo")
console.log(titulo_query)

//consultar por clase
let parrafos = document.getElementsByClassName("parrafos")
console.log(parrafos)


//modificar el contenido del DOM

titulo_id.innerHTML = "<h2>esto es un nuevo titulo desde js<h2>"
titulo_id.textContent = "Modificacion de contenido"

//agregar elemento a la clase 
titulo_query.style.color = "red"
titulo_query.style.fontSize = "50px"

let mi_parrafo = document.querySelector("#mi-parrafo")
mi_parrafo.classList.add("parrafos")

//crear nuevos elementos 
let nuevo_parrafo = document.createElement("p")
nuevo_parrafo.textContent = "parrafo nuevo creado"
document.body.appendChild(nuevo_parrafo)

//titulo_id.remove() para quitar elementos

const boton = document.getElementById("click")
boton.addEventListener("click", () => {
    for(let i= 0; i <parrafos.length; i++){
        parrafos[0].remove();
        titulo_elemento[0].style.color = "red"
    }
});