// condicionales IF, ELSE, SWITCH, TERNARIO

let edad = 15 

if(edad >= 18){
    console.log("es mayor de edad")
}else{
    console.log("es menor de edad")
}

let precio_naranja = 100;
let descuento = 0.2;

if(precio_naranja > 10){
    let precio_final = precio_naranja - precio_naranja*descuento
    console.log(precio_final)
}else{
    if(precio_naranja > 5){
        let precio_final = precio_naranja -precio_naranja*0.1
        console.log(precio_final)
    }else{
        console.log(precio_naranja)
    }
}

//switch

let dia_semana = "Lunes";

switch(dia_semana){
    case "Lunes":
        console.log("Hoy es Lunes");
    break;

    case "Martes":
        console.log("hoy es martes");
    break;
    default:
        console.log("no es ningun dia de la semana de lunes a viernes")  
}

// operador ternario
let pensionado = true;
let es_pensionado = (pensionado)? "es pensionado" : "no es pensionado";

console.log(es_pensionado)