const nombre:string = "Camilo"

class Persona{
    nombre:string

    constructor(_nombre:string){
        this.nombre=_nombre
    }

    mostrar():void{
        console.log("Cualquier cosa")
    }
}

export default Persona