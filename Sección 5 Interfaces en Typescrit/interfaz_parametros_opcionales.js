function MostrarPersona(persona) {
    var mediaPersona = persona.altura / persona.peso;
    if (persona.nombre == undefined) {
        return "La media de la persona es " + mediaPersona;
    }
    else {
        return "La media de " + persona.nombre + " es " + mediaPersona;
    }
}
var persona = { altura: 25, peso: 14, nombre: "Ivan" };
var personaDos = { altura: 25, peso: 14 };
console.log(MostrarPersona(persona));
console.log(MostrarPersona(personaDos));
