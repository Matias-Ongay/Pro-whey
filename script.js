const productos = [
	{
        id:1,
		nombre: "Whey protein choco",
		precio: 10.99,
		imagen: src="./imagenes/whey.jpg"
	},
	{
        id:2,
		nombre: "vitaminas",
		precio: 15.99,
		imagen: "./imagenes/vitamin.jpg"
	},
	{
        id:3,
		nombre: "Whey protein crema",
		precio: 19.99,
		imagen: "./imagenes/proteincrema.jpg"
	},
    {
        id:4,
        nombre: "Creatina",
		precio: 30.50,
		imagen: "./imagenes/creatina.jpg"
    },
    {
        id:5,
        nombre: "Pre entreno",
		precio: 19.99,
		imagen: "./imagenes/prework.jpg"
    },
    {
        id:6,
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
    botonAgregar.addEventListener("click", () => agregarAlCarrito(producto));
    producto.appendChild(botonAgregar);
   

	catalogo.appendChild(producto);
}

function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log(`el producto ${carrito[0].id} ha sido agregado al carro`)
}
  

  