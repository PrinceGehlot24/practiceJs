class Animal{
    constructor(breed,name,age){
        this.breed = breed,
        this.name = name,
        this.age = age
    }
}


Animal.prototype.displayInfo= function(){
return (this.name + " is " + this.breed + " & She is " + this.age + " year old."   ) 
}

let mauli = new Animal("labrador", "Mauli", 2)
console.log(mauli.displayInfo())