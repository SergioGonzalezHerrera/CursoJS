Para este proyecto se utilizó como plantilla el siguiente repositorio:

https://github.com/CodeExplainedRepo/shopping-cart-javascript.git

Descripción del funcionamiento básico del simulador:

Al hacer click en el boton de agregar al carrito sobre la imagen del producto, se agrega al carrito.
Los productos en el carrito se pueden agregar a quitar unidades con los botones de + o -, pero no se pueden quitar unidades si hay solo 1. para quitar el producto completamente del carrito hay que hacer click sobre la imagen del producto dentro del carrito, para evidenciar esto tiene un hover.

Descripcion un poco mas detallada:

Los productos estan almacenados en productos.json
La primer funcion realiza un fetch a ese json, luego los almaceno en un array vacío.
Luego hay una función para pintar los productos en el html.
El carrito, que muestra lo que se haya almacenado en el local storage o en caso que que no haya nada devuelve un array vacio.
Luego la función para agregar productos al carrito, que como complemento verifica primero si el producto ya esta en el carrito, en ese caso para no duplicar el producto llama a la función para sumarle una unidad.
Luego una función para actulizar el carrito, que llama a otras funciones y guarda el carrito en el localstorage.
Luego una función que calcula el precio total del carrito.
luego la función que pinta los productos del carrito en el html.
Función que quita completamente el producto del carrito.
Función para sumar o restar productos del carrito.
Función para finalizar la compra.