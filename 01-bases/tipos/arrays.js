"use strict";
(() => {
    //const numbers: (number | string | boolean)[] = [1,2,3,4,5,6, '7', 8, 9];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.push(10);
    console.log(numbers);
    const dbz = ["Goku", "Vegeta", "Krilin"];
    dbz.forEach(v => console.log(v.toUpperCase()));
})();
