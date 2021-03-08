class Persona {
    constructor(_nombre) {
        this.nombre = _nombre;
    }
    get getNombre() {
        return this.nombre;
    }
    set setNombre(nombre) {
        this.nombre = nombre;
    }
}
const persona = new Persona("Hola");
console.log(persona.getNombre);
persona.setNombre = "buenas";
console.log(persona.getNombre);
