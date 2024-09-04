
const person = {
    name : "Alice",
    age : 23,

    printName(){
        console.log(this.name);
    },
}

person.printName();

// De-structuring example below:

const printAge = ({ age }) => {
    console.log(age)
}

const printAge_normal = (obj) => {
    console.log("Age is: " + obj.age);
    console.log("Name is: " + obj.name);
}

printAge(person);
printAge_normal(person);

const { name, age } = person;

console.log("De-structured data:");
console.log(name);
