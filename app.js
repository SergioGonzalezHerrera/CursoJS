/*
let entrada = prompt("Ingrese un número, cuando desee frenar escriba ESC")

while (entrada != "ESC" && entrada != "esc"){

    if (entrada % 2 ==0) {
        alert("Es par");
    }else{
        alert("Es impar");
    }

    let entrada = prompt("Ingrese un número, cuando desee frenar escriba ESC")
}
*/

for (let index = 0; index < 10; index++) {
    
    let entrada = prompt("Ingrese un número;")
    if (entrada % 2 ==0) {
        alert("Es par");
    }else{
        alert("Es impar");
    }
}