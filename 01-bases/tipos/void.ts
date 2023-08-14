
(()=>{

    //la palabra reservada void indica que no regresa nada
    function callBatman():void {

        return;
    }

    const callSuperman = ():void => {
        return;
    }

    const a = callBatman();
    console.log(a);

})()