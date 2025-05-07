const persona = {
    id: Math.random() * 10,
    nombre: 'Sebastian',
    edad: 17,

}

persona.edad = 18
document.write(`La edad de la persona es: ${persona.nombre} y su Id: ${persona.id}`)


let persona = {
    nombre: 'Sebastian',
    edad: 40,
    ciudad: 'Ibague'
}

document.write(persona['nombre'] + ' es de  ' + persona['ciudad'])

const persona1 = {
    nombre : 'Edwin',
    edad : 30,
    saludar : function() {
        document.write(`Hola, soy ${this.nombre}`)
    }
}

persona1.saludar()

persona1.profesion = 'Productor Musical'
console.log(persona1.profesion)

delete persona1.profesion 
document.write(persona1.profesion)

for (clave in persona1) {
    document.write(`${clave} : ${persona1[clave]} <br>`)
}

const persona2 = new Object()
persona2.nombre = 'Valentina'
persona2.edad = 15
persona2.saludar = function() {
    document.write(`Hola soy ${this.nombre} <br>`)
}

const persona3 = new Object({
    nombre: 'Olga',
    edad: 57
}) 



/**
 * Aqui hay algo peculiar, se sabe que variables que se definan por const no se les puede
 * asignar un nuevo valor, pero eso no significa que los objetos o funciones sean inmutables,
 * se pueden cambiar valores y esto si es permitido. No se considera como reasignacion
 * 
 * Se usa el formato de ${} para escribir los valores en el html mas sencillo
 */