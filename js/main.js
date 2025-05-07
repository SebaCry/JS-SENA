const list = [1 , 2, 3]

for (let i = 0; i < list.length; i++ ){
    console.log(list[i])
}

//---------------------------------


const personas = {
    nombre: 'Sebastian',
    apellido: 'Perez',
    edad: 17,
    ciudad: {
        dato1 : 'Neiva',
        dato2 : 'Ibague'
    },
    direccion: function(){
        console.log("holi")
    }
}

console.log(personas)

person_dato1 = personas.ciudad.dato1
console.log(person_dato1)

persona_funcion = personas.direccion()

//---------------------------------

// var x = 5


// elem = document.getElementById("demo")
// elem.innerHTML = "x is "+x+" and y is "+ y

// var y = 7

const x = 5
const y = 6
const z = x + y

document.write(z)

//---------------------------------

let persona = "John Doe", 
carName = "Volvo", 
price = 200

document.write(' '+persona+ ' le pertenece este carro de marca '+carName)

let Papupapu
console.log(Papupapu)
