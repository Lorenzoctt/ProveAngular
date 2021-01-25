// classe javascript  (.js) e rinominazione 

class Person {
    //
    constructor(name, age){
        this._name=name;
        this._age=age;
    }


    // function Person(){ 

    // }

    greetPerson() {
        console.log('Hello ${this.name}');
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name=newName;

    }

}  // end class

const marco = new Person("Marco",34);
marco.greetPerson();

