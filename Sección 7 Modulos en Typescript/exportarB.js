"use strict";
exports.__esModule = true;
var nombre = "Camilo";
var Persona = /** @class */ (function () {
    function Persona(_nombre) {
        this.nombre = _nombre;
    }
    Persona.prototype.mostrar = function () {
        console.log("Cualquier cosa");
    };
    return Persona;
}());
exports["default"] = Persona;
