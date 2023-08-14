"use strict";
(() => {
    let myCustomVariable = 'Luis';
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ["Ninguno"]
    };
    console.log(typeof myCustomVariable);
})();
