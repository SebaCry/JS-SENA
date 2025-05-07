
const Estudiantes = new Object(
    {
        nombre: "Sebastian",
        edad: "17",
        skills: ["Python", "React", "Django"]
    }
)

const mostrarObjeto = () => {
    for (clave in Estudiantes) {
        document.write(`${clave} : ${Estudiantes[clave]} <br>`)
    }
}

const editar = () => {
    Estudiantes.nombre = prompt("Escribe el nombre a editar").trim()
    Estudiantes.edad = parseInt(prompt("Escribe la edad para cambiar"))
    

    for (let i of Estudiantes.skills){
        Estudiantes.skills.splice(0, Estudiantes.skills.length)
        cursos = prompt('Digita los cursos').trim()
        Estudiantes.skills.push(cursos)
    }

}

const nombreEdad = () => {
    document.write(`${Estudiantes['nombre']} y ${Estudiantes['edad']} <br>`)
}

const hallarLista = () => {
    for (clave in Estudiantes.skills) {
        document.write(`${Estudiantes.skills[clave]} <br>`)
    }
}


