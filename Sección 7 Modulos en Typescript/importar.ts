import { nombre,Persona,General, GeneralDos, mostrar } from './exportar';
import * as paquete from "./exportar"

console.log(nombre)

const persona = new Persona("Ivan")
console.log(persona.nombre)

const general:General = {nombre:"Tomas"}
console.log(general.nombre)

const generalDos:GeneralDos<string> = {nombre:"Tomas"}
console.log(generalDos.nombre)

mostrar()