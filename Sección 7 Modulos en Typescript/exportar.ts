export const nombre:string = "Camilo"

export class Persona{
    nombre:string

    constructor(_nombre:string){
        this.nombre=_nombre
    }
}

export interface General{
    nombre:string
}

export const mostrar = ():void =>{
    console.log("Hola")
}

export interface GeneralDos<T>{
    nombre:T
}