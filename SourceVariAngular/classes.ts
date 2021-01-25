// classe typescript  (.ts) 

class Person {
    // campi
    private _name: string;
    private _age: number;

    constructor(name:string , age:number){
        this._name=name;
        this._age=age;
    }



    greetPerson() {
        console.log('Hello ${this.name}');
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name=newName;

    }

}  // end class Person

const marco = new Person("Marco",34);
marco.greetPerson();

