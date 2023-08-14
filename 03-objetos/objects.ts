(()=>{

    let flash: { name: string, age?: number, powers: string[], getName?:() => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    }

    let superman: { name: string, age?: number, powers: string[], getName?:() => string } = {
        name: 'Clark kent',
        age: 60,
        powers: ['Súper velocidad']
    }



    // flash = {
    //     name:'Clark Kent',
    //     //age: 60,
    //     powers:['Súper Fuerza'],
    //     getName (){
    //         return this.name;
    //     }
    // }

    // console.log( flash.getName() ) ;

})()    