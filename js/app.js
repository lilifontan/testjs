// EVENTOS

//Creo la clase
class Joya {
    constructor(id, nombre, imgSrc, precio) {
        this.id = id
        this.nombre = nombre
        this.imgSrc = imgSrc
        this.precio = precio
    }
}

//Llamo al constructor con la info de mis productos
const prod1 = new Joya('001', 'Ethereal','./Imagenes/Ring_resized.jpg', 12500)
const prod2 = new Joya('002', 'Avar','./Imagenes/Earrings_resized.jpeg', 15900)
const prod3 = new Joya('003', 'Cyon','./Imagenes/Necklace_resized.jpeg', 16500)
const prod4 = new Joya('004', 'Balter','./Imagenes/Ring_resized.jpg', 24500)

//Creo el array con los productos
const productos = [prod1, prod2, prod3, prod4]

//Creo el array para el carrito
let carrito = []

//Función que renderiza mis productos en pantalla
productos.forEach((producto) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    <div class="cartImg scale"> <img src="${producto.imgSrc}" /> </div>
    <div class="cartTitle"><h2>${producto.nombre}</h2></div>
    <div class="cartPrice"><h2>${producto.precio}</h2></div>
    <button data-id="${producto.id}" class="buttonCTA"> Agregar al Carrito </button>
        `
    ID_cardContainer.append(card)
})

//Función que agrega productos al carrito
const botonAgregarProductos = document.querySelector('#agregarProductos')

//Meto el producto en el carrito. Recibo el e (evento) porque necesito usar la propiedad target de los eventos. Con el find busco en el array de productos, por el atributo marca
const agregarProducto = (e) => {
    const productoElegido = e.target.getAttribute('data-id')
    const producto = productos.find((producto) => producto.id ==  productoElegido)
    carrito.push(producto)
    console.log(carrito)
}

//Como no le puedo aplicar métodos de nodos a un array, creo el forEach para acceder a cada elemento
const botonesCompra = document.querySelectorAll('.buttonCTA')
botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarProducto)
})
