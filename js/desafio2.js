//funcion constructora de productos
function Producto(id, img, nombre, detalle, precio) {
    this.id = id;
    this.img = img;
    this.nombre = nombre;
    this.detalle = detalle;
    this.precio = precio;
}
//creacion de un "stock" "inventario"
let productos = [
    new Producto(1, "", "Varita Harry Potter", "28 centímetros", 5500),
    new Producto(2, "", "Varita Hermione Granger", "27,3 centímetros", 5000),
    new Producto(3, "", "Varita Ron Weasley", "30,48 centímetros", 4500),
]
//carrito es un array y arranca vacio porque luego va a tener dentros los productos que elija el cliente
const carrito = [
]
//esta función en el parámetro ID recibe el ID de producto, y en base a ese dato busca dentro del array de objetos "varitas" y devuelve los datos para despues imprimirlos en el menu
function datosVarita(id) {
    let producto = productos.find(product => product.id === id)
    let opcion = prompt(`Descripción:
    ${producto.nombre}
    ${producto.detalle}
    $ ${producto.precio}
    
    1.- Agregar al carrito
    2.- Volver`)
//luego dentro de la misma función da la opción de agregar al carrito o volver, esto luego tendré que separarlo en dos funciones distintas.
    if (opcion == 1) {
        agregarCarrito(id)
        menuDeVaritas()
        //agrega al carrito y vuelve al menu
    } else {
        if (opcion == 2) {
            menuDeVaritas()
            //vuelve al menu
        }
        else {
            alert("Opcion incorrecta, intente nuevamente")
            menuDeVaritas()
            //da mensaje de error y vuelve al menu
        }
    }
}
//este es el "menu principal" y casi siempre se vuelve a esta función, desde aquí practicamente se accede a todo
function menuDeVaritas() {
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

//función de agregar al carrito, recibe para ID lo busca con find y lo pushea al array carrito.
function agregarCarrito(id) {
    let producto = productos.find(product => product.id === id)
    carrito.push(producto)
    alert("Producto añadido al carrito satisfactoriamente")
}

//función inicial, saluda y da inicio al programa
function saludar() {
    let nombre = prompt("Ingrese su nombre:")
    let apellido = prompt("Ingrese su apellido")
    alert(`${nombre} ${apellido} bienvenido a nuestro sitio web, será redigido al menu de compra`)
    menuDeVaritas()
}

//para aca objeto en el array carrito va sumando el precio y lo almacena en la variable total que luego la devuelve
function totalCarrito(carrito) {
    let total = 0
    carrito.forEach(element => {
        total += element.precio
    });
    return total
}

//función que saluda al salir
function final() {
    alert("Gracias por su visita!")
}

//función de cierre de programa una vez finalizada la compra
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

let catalogo = document.querySelector("#catalogoProductos")
let template = document.querySelector("#plantillaCardPorductos")
let card = template.content.querySelector("#cardProductos")

productos.forEach((producto)=>{
    let cardClone = card.cloneNode(true)
    catalogo.appendChild(cardClone)

    cardClone.children[0].innerText = producto.nombre
    cardClone.children[1].innerText = producto.detalle
    cardClone.children[2].innerText = `$ ${producto.precio}`
})

//toma solo el click de la primer card
let agregarAlCarritoBtn = document.querySelector("#agregarAlCarrito")
agregarAlCarritoBtn.onclick = () => {
    console.log("hice click")
}

//a fin de cumpli con el desafio una función que cumpla con el objetivo

let divSaludo = document.querySelector("#saludo")
let formulario = document.querySelector("#formulario")
formulario.addEventListener("submit", saludarFormulario)

function saludarFormulario(e){
    e.preventDefault()
    let formulario = e.target
    divSaludo.innerText = ` Bienvenido ${formulario.children[0].value} ${formulario.children[1].value} ` ;
}