/*2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries.
 Example:
let obj = {
 a:”Apple”,
 b:[“Basketball”,”Baseball”],
 c: {
  call: “cellphone”
 },
 d: “Dog”
}
filterObject(obj) //This should return {a:”Apple”, d:”Dog”}
 */

//using Object.entries

let obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone",
  },
  d: "Dog",
};

const arrayOfEntries = Object.entries(obj); //Returns an array of key/values of the enumerable properties of an object

let newObject = {};
arrayOfEntries.forEach((arr) => {
  if (typeof arr[1] != "object") {
    newObject[`${arr[0]}`] = arr[1];
  }
});
console.log(newObject);

//using Object.keys

objPerson = {
  name: "Harshal",

  objarr: ["student", "man", "woman"],

  objPerson1: {
    name1: "shubham",
    age1: 23,
  },
  age: 25,
};

let newoObj = {};
Object.keys(objPerson).forEach((arr) => {
  if (typeof objPerson[arr] != "object") {
    newoObj[arr] = objPerson[arr];
  }
});

console.log(newoObj);
