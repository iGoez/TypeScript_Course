var carta_postre = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El postre es " + postre + " y tiene " + frutas);
};
carta_postre("postre 1", "naranja", "fresa");
