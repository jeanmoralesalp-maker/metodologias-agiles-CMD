// Actividad 5

let celular = {
    marca: "Motorola",
    modelo: "Moto G54 5G",
    color: "Azul",
    almacenamiento: "256 GB",
    ram: "8 GB",
    pantalla: "6.5 pulgadas",
    bateria: "5000 mAh",
    camara: "50 MP",
    sistema: "Android",
    peso: "192 gramos"
};

// Mostrar el nombre
console.log("Nombre: Christian");

// Mostrar las características
console.log("\n--- Características del celular ---");

let caracteristicas = [
    ["Marca", celular.marca],
    ["Modelo", celular.modelo],
    ["Color", celular.color],
    ["Almacenamiento", celular.almacenamiento],
    ["RAM", celular.ram],
    ["Pantalla", celular.pantalla],
    ["Batería", celular.bateria],
    ["Cámara", celular.camara],
    ["Sistema", celular.sistema],
    ["Peso", celular.peso]
];

// Mostrar la información en forma de tabla
console.table(
    caracteristicas.map(([prop, val]) => ({
        "Característica del celular": prop,
        "Descripción": val
    }))
); 