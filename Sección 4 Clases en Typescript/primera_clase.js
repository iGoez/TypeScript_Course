var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, fecha_, puertas_) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }
    return Vehiculo;
}());
var coche = new Vehiculo("Ford", "12/7/2018", 4);
console.log(coche.marca);
