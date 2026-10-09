//Datos y metodos de un objeto 
//Ficha de menú 
//Los datos son distintos a proposito. Compara la forma, no el contenido 
const producto = {
    id: "p-07",
    nombre:"Agua de jamaica",
    precio:15,
    categoria:"bebida",
    disponible: true,

    // Metodos
    resumen(){
        return this.nombre + " - $ " + this.precio + "(" 
        + this.categoria + ")"
    }, 

    estaDisponible(){
        return this.disponible;
    }
};

console.log("Paso 1 - Imprimiendo el producto");
console.log(producto);

//Paso 2 - Tres formas de leer 
console.log("-----Paso 2-----");
const campo = "nombre";
console.log(producto.nombre);
console.log(producto["nombre"]);
console.log(producto[campo]); 


console.log("-----Paso 3-----");
console.log(producto.resumen());
console.log(producto.estaDisponible());

// ----- Paso 4 El usuario ----
const usuario = {
    id :"u-03",
    nombre: "Juanito Pistolas",
    correo: "juanito@cbtis258.edu.mx",
    rol:"alumno",
};


// ---- Paso 5 ----
const pedido = {
    folio:"PR-0118",
    cliente: usuario,
    producto: producto,
    cantidad: 3,
    estado: "pendiente",
}


console.log("----Paso 5----");
console.log(pedido.cliente.nombre);
console.log(pedido.producto.precio);
console.log(pedido.cliente.correo);



//Paso 6 - Desestructuración
console.log("--------Paso 6 --------");
const {nombre, precio} = producto;
console.log(nombre, precio);

const {cantidad, nota = "sin nota"} = pedido;
console.log(cantidad, nota);
console.log("Jean Christian, Soy programador");


//Paso 7 - Total a pagar
const total = producto.precio * pedido.cantidad;
pedido.total = total;

console.log("-----Paso 7----");
console.log(pedido);


//------ Paso 8 ------
console.log("-----Paso 8----");
const copiaMala = producto;
copiaMala.precio = 999;
console.log(producto.precio);
// Imprimira 999, porque copiaMala y producto apuntan al mismo objeto
// La variable no guarda el objeto, guarda donde esta 
producto.precio = 15; // lo dejamos como estaba

const copiaBuena = {...producto};
copiaBuena.precio = 1000;
console.log(producto.precio); // 15 el original quedo intacto


//------ Paso 9 ------
console.log("-----Paso 9----");

const respuestaOk = {
    ok: true,
    data:pedido
};

const respuestaError = {
    ok: false,
    error: {
        mensaje: "El producto no esta disponible",
        detalles:[]
    }
};
console.log(respuestaOk);
console.log(respuestaError);