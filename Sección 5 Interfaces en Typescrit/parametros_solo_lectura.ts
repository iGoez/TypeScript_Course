//La propiedad readonly no permite que se modifiquen los atributos de la interfaz
interface Persona{
    readonly nombre:string
    readonly apellido:string
}

let persona:Persona = {nombre:"Camilo", apellido:"Goez"}

console.log(persona)