// initializing values using let and const keywords.
let l;
l = 10;
console.log(l);
const c = 20; 
console.log(c);
// creating array using let keyword.
let arr = [1,2,3,4.5];
//checking the type of variables.
console.log(typeof arr);
console.log(typeof(null));
console.log(typeof(NaN));
console.log(typeof(10n));
console.log(typeof(true));
console.log(typeof("abcd"));

//Declaring Object type Person.
let person = {
    firstName: "Harshal",
    lastName: "Sonawane",
};
console.log(person.firstName + " " + person.lastName);
//console.log(person);

//Declaring the Array.
var d = new Array(1,2,3,"Harshal",null);
d.forEach(num =>console.log(num));



