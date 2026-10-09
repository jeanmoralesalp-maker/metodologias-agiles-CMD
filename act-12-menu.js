//Ejercicio - El menu vivo - version de referencia

//------ Paso 1 ------ El arreglo

const productos = [
    { id:crypto.randomUUID(), nombre: "Molletes", precio:30, categoria:"comida", disponible:true},
    { id:crypto.randomUUID(), nombre: "Jugo de Naranja", precio:18, categoria:"bebida", disponible:true},
    { id:crypto.randomUUID(), nombre: "Gelatina", precio:12, categoria:"Postre", disponible:false}
];


//------ Paso 2 y 3------ LEER(read) -------
const listarProductos = ()=> productos;

const ListarDisponibles = ()=> productos.filter((p)=> p.disponible);

//------ Paso 4 ------ Buscar un Producto -------
const obtenerPorId = (id)=> productos.find((p) => p.id === id);

//------ Paso 5: crear -------
function crear(datos){
    const nuevo = {id:crypto.randomUUID(), disponible:true, ...datos};
    productos.push(nuevo);
    return nuevo;
};

//------ Paso 6: actualizar -------
function actualizar(id, cambios){
    const i = productos.findIndex((p) => p.id === id);
    if (i !== -1) return null;
    productos[i] = { ...productos[i], ...cambios };
    return productos[i];
}

//------ Paso 7 Borrado logico -------
function eliminar(id) {
    const producto = obtenerPorId(id);
    if (!producto) return null;
    producto.disponible = false;
    return producto;
}

// Razon: los pedidos viejos guardan el id de su producto, el historial queda apuntado a algo que ya no existe 
// y el corte del dia se rompe, es mejor marcarlo como no disponible para sacarlo del menu sin destruir la informacion, ademas se puede revertir

//------ Paso 8 Total con reduce -------
function CalcularTotal(pedidos){
    return pedidos.items.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
}

//------ Paso 9: ya existe? -------
const existeNombre = (nombre) => 
    productos.some((p) => p.nombre.toLowerCase() === nombre.toLowerCase());

const buscarPorTexto = (texto) =>
    productos.filter((p) => p.nombre.toLowerCase().includes(texto.toLowerCase()));

//------ Paso 10 Pruebas -------
console.log("----------Listar----------");
console.log(listarProductos().map((p) => p.nombre));
console.log("----------Listar Disponibles----------");
console.log(ListarDisponibles().map((p) => p.nombre));


console.log("----------Crear----------");
const creado = crear({nombre:"Sincronizada", precio:32, categoria:"comida"});
console.log(creado);
console.log(listarProductos());
console.log("Jean Christian");