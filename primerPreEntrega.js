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
        break
    case 2:
        datosVarita(2)
        break;
    case 3:
        datosVarita(3)
        break;
    case 4:
        let siONo = Number(prompt(`El total de su compra es de ${totalCarrito(carrito)}
        Desea confirmar la compra?
        1.- Si
        2.- No`))
        salirOVolver(siONo)
        break
    case 5:
        final()
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

function final() {
alert("Gracias por su visita!")
}

function salirOVolver(opcion) {
switch (opcion) {
    case 1:
        alert("Muchas gracias por su compra! Será reedirigido al sitio de pago.")
        final()
        break;
    case 2:
        menuDeVaritas()
        break;
    default:
        alert("Opción incorrecta")
        break;
}
}

saludar()