const defecto = (nombre:string,apellido:string,edad:number=30):void => {
    console.log(`Se llama ${nombre} y su apellido es ${apellido} y su edad es ${edad}`)
}

defecto("Ivan","Camilo")