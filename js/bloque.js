function pruebaScope() {
    if (true) {
        var a = 1 
        var b = 2
        const c = 3
    }

    console.log(a+b)

    document.write(a)
}

pruebaScope()

/**
 * Observando el codigo se puede definir
 * que una constante que este dentro de una estructura como if
 * si lo quiero llamar afuera de esa estructura no va a imprimir su valor
 * como se puede ver en el document.write. Esto se debe a que const tiene un
 * manejo de errores con la constante
 */