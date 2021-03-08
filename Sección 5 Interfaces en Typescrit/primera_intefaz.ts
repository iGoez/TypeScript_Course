interface Persona{
    //Atributos
    nombre:string
}

function caminar(persona:Persona):void{
    console.log(`La persona ${persona.nombre} está caminando`)
}

let nueva_persona = {nombre:"Camilo", apellido:"Goez"}
caminar(nueva_persona)