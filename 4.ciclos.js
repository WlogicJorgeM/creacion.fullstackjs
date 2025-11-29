//ciclos en js: estructuras repetitivas 
//while, dowhile
//for

let contador = 0

while(contador < 10){
    contador = contador + 1
    console.log(contador)
}

do{
    console.log(contador)
    contador = contador - 1;
}while((contador > 0))

//si es falso entonces continua
console.log("fin del programa")

//for

for(let i = 0; i <= 10; i++){
    console.log(i)
}