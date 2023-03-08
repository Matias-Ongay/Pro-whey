const productos = [
	{
        
		nombre: "Whey protein choco",
		precio: 10.99,
		imagen: src="./imagenes/whey.jpg"
	},
	{
        
		nombre: "vitaminas",
		precio: 15.99,
		imagen: "./imagenes/vitamin.jpg"
	},
	{
        
		nombre: "Whey protein crema",
		precio: 19.99,
		imagen: "./imagenes/proteincrema.jpg"
	},
    {
      
        nombre: "Creatina",
		precio: 30.50,
		imagen: "./imagenes/creatina.jpg"
    },
    {
        
        nombre: "Pre entreno",
		precio: 19.99,
		imagen: "./imagenes/prework.jpg"
    },
    {
        
        nombre: "Glutamina",
		precio: 10.00,
		imagen: "./imagenes/glutamine.jpg"
    },
];

const catalogo = document.getElementById("catalogo");
const carrito = [];
for (let i = 0; i < productos.length; i++) {
	const producto = document.createElement("div");
	producto.classList.add("producto");

	const imagen = document.createElement("img");
	imagen.classList.add("imagen");
	imagen.src = productos[i].imagen;
	producto.appendChild(imagen);

	const nombre = document.createElement("div");
	nombre.classList.add("nombre");
	nombre.textContent = productos[i].nombre;
	producto.appendChild(nombre);

	const precio = document.createElement("div");
	precio.classList.add("precio");
	precio.textContent = `$${productos[i].precio.toFixed(2)}`;
	producto.appendChild(precio);

    const botonAgregar = document.createElement("button");
    botonAgregar.textContent = "Agregar al carrito";
    botonAgregar.classList.add("boton-agregar");
    botonAgregar.addEventListener("click", () => agregarAlCarrito(productos[i]));
    producto.appendChild(botonAgregar);
   

	catalogo.appendChild(producto);
}
function generarMensaje(carrito) {
	let mensaje = "¡Hola! Aquí te comparto los productos que un cliente agregó al carrito:\n\n";
	for (let i = 0; i < carrito.length; i++) {
	  const producto = carrito[i];
	  mensaje += `Nombre: ${producto.nombre}\n`;
	  mensaje += `Precio: $${producto.precio.toFixed(2)}\n\n`;
	}
	return decodeURIComponent(mensaje);
  }
function agregarAlCarrito(productos) {
    carrito.push(productos);
    console.log(carrito);
}

const button = document.getElementById("carrito");
button.addEventListener("click", function() {
  const mensaje = encodeURIComponent(generarMensaje(carrito));
  window.open(`https://api.whatsapp.com/send?phone=+542616731229&text=${mensaje}`, "_blank");
});

  