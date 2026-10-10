let name = "jhon";
let age = 25;
let isEnrrolled = true;
let subjets = ["Programacion", "Base de datos", "IA"];

//Acceder a la informacion
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(isEnrrolled));
console.log(typeof(subjets));

console.log(Array.isArray(subjets));
console.log(subjets.map(function (s){return typeof(s); }));
subjets.forEach(function (element){
    console.log(element);
}) 


let estudiante = {
    nombre: "Jhon",
    edad: 25,
    inscrito: true,
    materias: ["Programacion", "Base de datos", "IA"]
};

console.log(typeof(estudiante));
//Accedemos a los datos especificos del objeto
console.log("el nombre del estudiante es: " + estudiante.nombre);
console.log("la edad del estudiante es: " + estudiante.edad);
console.log("el estudiante está inscrito: " + estudiante.inscrito);
console.log("las materias del estudiante son: " + estudiante.materias);
