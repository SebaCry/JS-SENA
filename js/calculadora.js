const suma = (a, b) => {
    return a + b
}

const resta = (a, b) => {
    return a - b
}

const multiplicacion = (a, b) => {
    return a * b
}

const division = (a, b) => {
    if (b === 0){
        return 'Error por dividir por 0'
    }
    return a / b
}

function calculadora() {
    while (true) {
        const pregunta = parseInt(prompt("Quieres salir de la calculadora? 1.Si 2.No"))

        if (pregunta === 2){
            let valor1 = parseInt(prompt("Dame el valor 1: "))
            let valor2 = parseInt(prompt("Dame el valor 2: "))

            let operacion = String(prompt("Escribe la operacion a realizar")).trim()
        
            switch(operacion){
                case 'suma' : 
                alert(suma(valor1, valor2))
                break
        
                case 'resta' : 
                alert(resta(valor1, valor2))
                break
        
                case 'multiplicacion' : 
                alert(multiplicacion(valor1, valor2))
                break
        
                case 'division' : 
                alert(division(valor1, valor2))
                break
        
                default:
                alert("Lo lamentamos, por el momento no disponemos de " + operacion + ".");
            }   
        } else{
            break
        }
    }
}    



