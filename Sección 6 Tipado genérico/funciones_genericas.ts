
function mostrar(dato:string):string {
    return dato
}

console.log(mostrar("Manuel"))

function mostrarGenerico<T>(dato:T):T {
    return dato
}

console.log(mostrarGenerico(25))
console.log(mostrarGenerico("Buenas"))