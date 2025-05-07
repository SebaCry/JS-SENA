const frutas = ["manzana", "banana", "naranja", "kiwi"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


const frutas1 = ["manzana", "banana", "naranja"];
for (let fruta of frutas1) {
    console.log(fruta);
}

const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
}
for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}

const frutas2 = ["manzana", "banana", "naranja"];
frutas2.forEach((fruta) => {
    console.log(fruta);
})

frutas2.forEach((fruta, index) => {
    console.log(`${index} : ${fruta}`)
})

function mostrarFruta(fruta) {
    console.log("Fruta: " + fruta);
}
frutas2.forEach(mostrarFruta);

//------------------------------------------------------

let persona1 = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
}

for (let [clave, valor] of Object.entries(persona1)){
    console.log(`${clave}: ${valor}`);
}

for (let valor of Object.values(persona1)){
    console.log(valor); 
}

for (let clave of Object.keys(persona1)){
    console.log(clave);
}

let empleados = [
    { nombre: "Ana", cargo: "Contadora" },
    { nombre: "Luis", cargo: "Ingeniero" },
    { nombre: "María", cargo: "Diseñadora" }
];
  
  
for (let empleado of empleados) {
  console.log(`${empleado.nombre} - ${empleado.cargo}`);
}
  
