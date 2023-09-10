"use strict";
/*
    * Singleton es un patron creacional ya que nos esta dando una tecnica para crear objetos, podemos utilizarlo cuando nuestra persistencia de la información de un objeto nunca va a cambiar, es decir, puede ser un calendario, los días de la semana porque esto nunca va a cambiar
    * solamente tiene un proposito hacer que solo exista si por si, una instancia y un objeto de una clase
*/
class Singleton {
    constructor() {
        this.random = Math.random();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}
const singleton = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log(singleton);
console.log(singleton2);
singleton.random = 12;
console.log(singleton);
console.log(singleton2);
