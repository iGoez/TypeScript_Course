class Persona{
    private nombre:string

    constructor(_nombre:string){
        this.nombre=_nombre
    }

    public get getNombre():string{
        return this.nombre
    }

    public set setNombre(nombre:string){
        this.nombre = nombre
    }
}

const persona = new Persona("Hola")

console.log(persona.getNombre)
persona.setNombre = "buenas"
console.log(persona.getNombre)