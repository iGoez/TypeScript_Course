interface Persona{
    altura:number
    peso:number
    nombre?:string
}

function MostrarPersona(persona:Persona):string{
    let mediaPersona:number = persona.altura / persona.peso

    if (persona.nombre == undefined) {
        return `La media de la persona es ${mediaPersona}`
    } else {
        return `La media de ${persona.nombre} es ${mediaPersona}`
    }
}

let persona:Persona = {altura:25, peso:14, nombre:"Ivan"}
let personaDos:Persona = {altura:25, peso:14,}

console.log(MostrarPersona(persona))
console.log(MostrarPersona(personaDos))