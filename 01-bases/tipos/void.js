"use strict";
(() => {
    //la palabra reservada void indica que no regresa nada
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
