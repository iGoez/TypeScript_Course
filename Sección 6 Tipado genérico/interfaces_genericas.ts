interface General<T>{
    nombre:T
}

let persona:General<string>={nombre:"Hola"}

//Las interfaces no pueden ser del todo genericas,
//hay que especificar el tipo de dato interfaz<tipo_dato>