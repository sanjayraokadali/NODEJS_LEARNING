
const ar = [1,2,3,4,5];

let new_ar = [...ar]; // Spread

// console.log(new_ar);

const createArray = (...args) => {
    return [...args]; // Rest 
}

console.log(createArray(ar));

// Spread operator is used to pull features or data out of an object or an array.
// Rest operator is used to merge multiple agruments into an array.