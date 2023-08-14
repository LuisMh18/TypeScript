

(()=>{

    //el never indica que la función no debe de terminar exitosamente
    const error = (message: string):never => {
        throw new Error(message);
    }

    error("Auxilio!");


})()