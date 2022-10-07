const productosDOM = document.querySelector(".products");
const productosCarrito = document.querySelector(".cart-items");
const subtotal = document.querySelector(".subtotal");
const productosTotal = document.querySelector(".total-items-in-cart");

// funcion que carga los productos de productos.js al HTML
function cargarProdcutos() {
  productos.forEach((product) => {
    productosDOM.innerHTML += `
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.imgSrc}" alt="${product.nombre}">
                    </div>
                    <div class="desc">
                        <h2>${product.nombre}</h2>
                        <h2><small>$</small>${product.precio}</h2>
                        <p>
                            ${product.descripcion}
                        </p>
                    </div>
                    <div class="add-to-cart" onclick="agregarAlCarrito(${product.id})">
                        <img src="./icons/bag-plus.png" alt="Agregar al carrito">
                    </div>
                </div>
            </div>
        `;
  });
}
cargarProdcutos();

// Array carrito
let carrito = JSON.parse(localStorage.getItem("CARRITO")) || [];
// toma los elementos del localStorage OR devuelve un array vacio
actualizarCarrito();

// agregar al carrito
function agregarAlCarrito(id) {
  // verifica si el producto ya esta en el carrito
  if (carrito.some((item) => item.id === id)) {
    sumarRestarUnidades("sumar", id);
  } else {
    const item = productos.find((product) => product.id === id);

    carrito.push({
      ...item,
      unidades: 1,
    });
    Toastify({
      text: `${item.nombre} se ha añadido al carrito`,
      duration: 2000,
      style: {
        background: "linear-gradient(to right, #c50000, #ffa700)",
      },
      }).showToast();
  }

  actualizarCarrito();
}

// actualizar el carrito, carga los productos y precio total
function actualizarCarrito() {
  mostrarProductosCarrito();
  actualizarSubtotal();

  // guardar el carrito en local storage
  localStorage.setItem("CARRITO", JSON.stringify(carrito));
}

// calculo del subtotal
function actualizarSubtotal() {
  let total = 0,
    totalItems = 0;

  carrito.forEach((item) => {
    total += item.precio * item.unidades;
    totalItems += item.unidades;
  });

  subtotal.innerHTML = `Subtotal (${totalItems} productos): $${total}`;
  productosTotal.innerHTML = totalItems;
}

// Muestra los productos en el carrito
function mostrarProductosCarrito() {
  productosCarrito.innerHTML = "";
  carrito.forEach((item) => {
    productosCarrito.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="quitarDelCarrito(${item.id})">
                <img src="${item.imgSrc}" alt="${item.nombre}">
                <h4>${item.nombre}</h4>
            </div>
            <div class="unit-price">
                <small>$</small>${item.precio}
            </div>
            <div class="units">
                <div class="btn minus" onclick="sumarRestarUnidades('restar', ${item.id})">-</div>
                <div class="number">${item.unidades}</div>
                <div class="btn plus" onclick="sumarRestarUnidades('sumar', ${item.id})">+</div>           
            </div>
        </div>
      `;
  });
}

function quitarDelCarrito(id) {
  carrito = carrito.filter((item) => item.id !== id);
  actualizarCarrito();
}

function sumarRestarUnidades(action, id) {
  carrito = carrito.map((item) => {
    let unidades = item.unidades;

    if (item.id === id) {
      if (action === "restar" && unidades > 1) {
        unidades--;
        Toastify({
          text: `${item.nombre} se ha quitado una unidad`,
          duration: 2000,
          style: {
            background: "linear-gradient(to right, #c50000, #ffa700)",
          },
          }).showToast();
      } else if (action === "sumar" && unidades < item.stock) {
        unidades++;
        Toastify({
          text: `${item.nombre} se ha añadido una unidad`,
          duration: 2000,
          style: {
            background: "linear-gradient(to right, #c50000, #ffa700)",
          },
          }).showToast();
      }
    }

    return {
      ...item,
      unidades,
    };
  });

  actualizarCarrito();
}

function finalizarCompra(){
  const { value: email } = Swal.fire({
    title: 'Ingrese su e-mail',
    input: 'email',
    inputLabel: 'Su e-mail',
    inputPlaceholder: 'usuario@usuario.com'
  })
  
  if (email) {
    Swal.fire(`Muchas gracias por su compra, nos comunicaremos a ${email} para brindarle detalles de pago y envio`)
  }
  // el mensaje final no aparece creo que porque no esta el "await", tengo que ver la clase de async para aplicarlo.
}

//falta el contenido del inicio
//falta un mensaje de "despedida" cuando termina la compra
//hay que sacar el "link" del número de objetos dentro de carrito
