/*const usuario = "admin"
const password = "12345678"

alert("Buen día! Bienvenido a nuestro sitio web de compras de HP, antes de comenzar debe iniciar sesión")

do {
    let login = prompt("Ingrese su usuario:")
    if (login != usuario) {
        alert("Usuario incorrecto")
    }
} while (login != usuario);

function menuDeVaritas(){
    let opcion = Number(prompt(`Seleccione una varita para ver los detalles:
1.- Harry Potter
2.- Hermione Granger
3.- Ron Weasley
4.- Salir`))
    switch (opcion) {
        case 1:
            let opcion1= prompt(` Descripción:
            ${varita1.nombre}
            ${varita1.longitud}
            $ ${varita1.precio}
    
            1.- Agregar al carrito
            2.- Volver`)
            agragarOVolver(opcion1)
            break;
        case 2:
            let opcion2= prompt(` Descripción:
            ${varita2.nombre}
            ${varita2.longitud}
            $ ${varita2.precio}
    
            1.- Agregar al carrito
            2.- Volver`)
            agragarOVolver(opcion2)
            break;
        case 3:
            let opcion3= prompt(` Descripción:
            ${varita3.nombre}
            ${varita3.longitud}
            $ ${varita3.precio}
        
            1.- Agregar al carrito
            2.- Volver`)
            agragarOVolver(opcion3)
            break;
        case 4:
            alert("Muchas gracias por su visita")
            break
        default:
            alert("Opción incorrecta, intente nuevamente")
            menuDeVaritas()
            break;
    }
}

*/

//productos disponibles

function Producto (id, nombre, longitud, precio){
        this.id = id;
        this.nombre = nombre;
        this.longitud = longitud;
        this.precio = precio;
}

let varitas = [
new Producto(1, "Varita Harry Potter", "28 centímetros", 5500),
new Producto(2, "Varita Hermione Granger", "27,3 centímetros", 5000),
new Producto(3, "Varita Ron Weasley", "30,48 centímetros", 4500),
]

const carrito = [
]

function datosVarita(id){
    let producto = varitas.find(product=>product.id===id)
    let opcion= prompt(`Descripción:
        ${producto.nombre}
        ${producto.longitud}
        $ ${producto.precio}
    
        1.- Agregar al carrito
        2.- Volver`)

        if (opcion == 1){
            agregarCarrito(id)
            menuDeVaritas()
        } else {
            if (opcion==2) {
                menuDeVaritas()
            }
            else{
                alert("Opcion incorrecta, intente nuevamente")
                menuDeVaritas()
            }
        }
}

function menuDeVaritas(){
    let opcion = Number(prompt(`Seleccione una varita para ver los detalles:
1.- Harry Potter
2.- Hermione Granger
3.- Ron Weasley
4.- Ver Total y confirmar
5.- Salir`))
    switch (opcion) {
        case 1:
            datosVarita(1)
        case 2:
            datosVarita(2)
            break;
        case 3:
            datosVarita(3)
            break;
        case 4:
            let opcion = prompt(`El total de su compra es de ${totalCarrito(carrito)}
            Desea confirmar la compra?
            1.- Si
            2.- No`)
            if (opcion == 1) {
                alert("Muchas gracias por su compra! Será reedirigido al sitio de pago.")
            } else {
                menuDeVaritas()
            }
        case 5:
            alert("Muchas gracias por su visita")
            break
        default:
            alert("Opción incorrecta, intente nuevamente")
            menuDeVaritas()
            break;
    }
}

function agregarCarrito(id){
    let producto = varitas.find(product=>product.id===id)
    alert("Producto añadido al carrito satisfactoriamente")
    carrito.push(producto)
}

function agragarOVolver(opcion){

}

function saludar(){
    let nombre = prompt("Ingrese su nombre:")
    let apellido = prompt("Ingrese su apellido")
    alert(`${nombre} ${apellido} bienvenido a nuestro sitio web, será redigido al menu de compra`)
    menuDeVaritas()
}

function totalCarrito(carrito){
    let total = 0
    carrito.forEach(element => {
        total += element.precio
    });
    return total
}

saludar()