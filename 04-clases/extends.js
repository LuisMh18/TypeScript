"use strict";
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado!');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        //Gets 
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        //Sets
        set fullName(name) {
            this.name = name;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.fullName = 'Luis';
    console.log(wolverine.fullName);
})();
