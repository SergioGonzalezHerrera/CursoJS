/*const usuario = "admin"
const password = "12345678"

alert("Buen día! Bienvenido a nuestro sitio web de compras de HP, antes de comenzar debe iniciar sesión")

do {
    let login = prompt("Ingrese su usuario:")
    if (login != usuario) {
        alert("Usuario incorrecto")
    }
} while (login != usuario);

*/

//productos disponibles

class varitas {
    constructor(nombre, longitud, precio){
        this.nombre = nombre;
        this.longitud = longitud;
        this.precio = precio;
    }
}

const varita1 = new varitas("Varita Harry Potter", "28 centímetros", 5500)
const varita2 = new varitas("Varita Hermione Granger", "27,3 centímetros", 5000)
const varita3 = new varitas("Varita Ron Weasley", "30,48 centímetros", 4500)

let opcion = Number(prompt(`Seleccione una varita para ver los detalles:
1.- Harry Potter
2.- Hermione Granger
3.- Ron Weasley
4.- Salir`))

function menuDeVaritas(){
if (opcion==1) {
    let opcion1= prompt(` Descripción:
        ${varita1.nombre}
        ${varita1.longitud}
        $ ${varita1.precio}

        1.- Agregar al carrito
        2.- Volver`)
    }else{
        if (opcion==2) {
            let opcion1= prompt(` Descripción:
            ${varita2.nombre}
            ${varita2.longitud}
            $ ${varita2.precio}

            1.- Agregar al carrito
            2.- Volver`)
        } else {
            if (opcion==3) {
                let opcion1= prompt(` Descripción:
                ${varita3.nombre}
                ${varita3.longitud}
                $ ${varita3.precio}

                1.- Agregar al carrito
                2.- Volver`)
            }
        }
    }
}

menuDeVaritas()