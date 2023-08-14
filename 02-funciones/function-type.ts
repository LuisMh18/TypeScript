(()=>{
   
    const addnumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${ name }`;
    const saveTheWorld = () => `El mundo esta salvado!`;

    let myFunction: Function;

    // let myFunction;

    // myFunction = 10;

    // console.log(myFunction);

    myFunction = addnumbers;
    console.log( myFunction(1, 2) );

    myFunction = greet;
    console.log( myFunction( 'Luis' ) );

    myFunction = saveTheWorld;
    console.log( myFunction() );

})()