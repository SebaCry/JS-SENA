/**
 * Esta es una @function declarada
 *  
 */

function saludar(nombre) { 
    console.log(`Hola ${nombre} espero estes bien`)
}

saludar('Sebastian')

/**
 * Esta es una @function anonima
 * Se guarda en una variable
 */

const despedir = function(nombre) {
    document.write(`Adios a ${nombre}\r`)
}

despedir('Diana')

/**
 * Esta es una @function flecha
 */

const suma = (a,b) => {
    return a + b
}

document.write(suma(4,6))

/**
 * Esta es una @function default
 */

function saludar1(nombre='Invitado') {
    document.write(`Hola ${nombre}`)
}

saludar1()

/**
 * Esta es una @function return
 */

function multiplicar(a, b){
    return a * b
}

let resultado = multiplicar(4,6)
document.write(`Resultado: ${resultado}`)


