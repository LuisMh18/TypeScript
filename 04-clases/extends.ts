(()=>{

     class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado!');
        }

        private getFullName(){
            return `${ this.name } ${this.realName}`;
        }

     }

     class Xmen extends Avenger{
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName);
        }

        //Gets 
        get fullName(){
            return `${ this.name } - ${this.realName}`;
        }

        //Sets
        set fullName(name: string){
            this.name = name; 
        }

     }

     const wolverine = new Xmen('Wolverine', 'Logan', true);
     console.log(wolverine);

    
     wolverine.fullName = 'Luis';

     console.log(wolverine.fullName);

})()