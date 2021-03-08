interface General{

    (nombre:string, apellido:string, edad:number):void
}

let funcionGeneral:General
funcionGeneral = function(nombre:string, apellido:string, edad:number):void {
    console.log(`${nombre} con el apellido ${apellido} y edad ${edad}`)
}

funcionGeneral("Ivan","Goez", 25)