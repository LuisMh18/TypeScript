"use strict";
(() => {
    //el never indica que la función no debe de terminar exitosamente
    const error = (message) => {
        throw new Error(message);
    };
    error("Auxilio!");
})();
