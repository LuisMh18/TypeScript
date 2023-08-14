"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark kent',
        age: 60,
        powers: ['Súper velocidad'],
        getName() {
            return this.name;
        }
    };
})();
