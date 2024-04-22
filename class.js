class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    displayInfo(){
        return this.name + "-" + this.age
    }

    ageAfterYear(year){
        this.age = this.age + year
        return this.age
    }
}

let prince = new Person("Prince", 27)
console.log(prince.displayInfo())

let amit = new Person("Amit", 24)
console.log(amit.displayInfo())
console.log(amit.ageAfterYear(5))