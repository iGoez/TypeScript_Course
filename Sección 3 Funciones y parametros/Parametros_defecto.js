var defecto = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 30; }
    console.log("Se llama " + nombre + " y su apellido es " + apellido + " y su edad es " + edad);
};
defecto("Ivan", "Camilo");
