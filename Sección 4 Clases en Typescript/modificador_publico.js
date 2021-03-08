var Animal = /** @class */ (function () {
    function Animal(_nombre, _tamano) {
        this.nombre = _nombre;
        this.tamano = _tamano;
    }
    Animal.prototype.moverse = function () {
        console.log("Me estoy moviendo");
    };
    return Animal;
}());
