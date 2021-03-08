var opcionales = function (nombre, apellido, edad) {
    if (edad == undefined) {
        console.log("Se llama " + nombre + " y su apellido es " + apellido);
    }
    else {
        console.log("Se llama " + nombre + " y su apellido es " + apellido + " y su edad es " + edad);
    }
};
opcionales("Ivan", "Camilo", 22);
