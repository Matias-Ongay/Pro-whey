let precioTotal = 0;
const productos = [
	{
        
		nombre: "Whey protein",
		precio: 10.99,
		imagen: src="./imagenes/whey.jpg"
	},
	{
        
		nombre: "vitaminas",
		precio: 15.99,
		imagen: "./imagenes/vitamin.jpg"
	},
	{
        
		nombre: "Whey protein",
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
	mensaje +=`Precio total: $${precioTotal.toFixed(2)}\n\n`;
	return decodeURIComponent(mensaje);
  }
function agregarAlCarrito(productos) {
	const productCarro = productos;
	const productosCarro=document.createElement("li");
	productosCarro.classList.add("listita");
	const eliminar=document.createElement("button");
	const elimarIcono=document.createElement("img");
	elimarIcono.src="./imagenes/eliminar.png"
	elimarIcono.classList.add("eliminarIcono");
	eliminar.classList.add("bot-eliminar");
	precioTotal += productos.precio;
    document.getElementById("precio-total").textContent = precioTotal.toFixed(2);
	productosCarro.textContent=productCarro.nombre+".......$"+productCarro.precio;
	productosCarro.appendChild(eliminar);
	eliminar.appendChild(elimarIcono);
	contenedorLista.appendChild(productosCarro);
	
    carrito.push(productos);
	eliminar.addEventListener("click", function() {
        borrar(productosCarro);
	});
}
function toggleMenu() {
	let menuContainer = document.getElementById("carrito-container");
	console.log("anda");
	if (menuContainer.style.display === "block") {
	  menuContainer.style.display = "none";
	} else {
	  menuContainer.style.display = "block";
	}
  }
const contenedorLista=document.getElementById("container-lista");
const button = document.getElementById("carrito");

function onButtonClick() {
	toggleMenu();
 }

 function borrar(productosCarro) {
    const precioProducto = parseFloat(productosCarro.textContent.split("$")[1]);
    precioTotal -= precioProducto;
    document.getElementById("precio-total").textContent = precioTotal.toFixed(2);
    const indice = carrito.indexOf(productosCarro);
    if (indice !== -1) {
        carrito.splice(indice, 1);
    }
    productosCarro.remove();
}

function mensajito() {
	const mensaje = encodeURIComponent(generarMensaje(carrito));
	window.open(`https://api.whatsapp.com/send?phone=+542616731229&text=${mensaje}`, "_blank");
	carrito.length = 0; 
  }
function comprarClick(){
	if(precioTotal <= 0){
		alert("Aun no has agregado nada al carrito");
	}else{
		mensajito();
		
	}
}
button.addEventListener("click",onButtonClick);
const whastsApp = document.getElementById("whatsapp");

  whastsApp.addEventListener("click",comprarClick);
