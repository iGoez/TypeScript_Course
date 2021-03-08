class Padre{
    protected nombre:string

    constructor(_nombre:string) {
        this.nombre=_nombre
    }

    mostrarNombre(){
        console.log(this.nombre)
    }
}

class Hijo extends Padre{
    public apellido:string

    constructor(_nombre:string, _apellido:string){
        super(_nombre)
        this.apellido=_apellido
    }
}

const hijo = new Hijo("Hola", "Hola")