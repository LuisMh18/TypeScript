(() => {

    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna verde";
    const volcanNnegro: string = `Héroe: Volcan negro`;

    console.log( batman.toUpperCase() );

    console.log( batman[10]?.toUpperCase() || 'No está definido' );

})()