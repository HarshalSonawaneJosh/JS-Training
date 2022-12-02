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

let obj = {
    a:"Apple",
    b:["Basketball","Baseball"],
    c: {
     call: "cellphone"
    },
    d: "Dog"
   }

   const arrayOfEntries = Object.entries(obj);  //Returns an array of key/values of the enumerable properties of an object

   let newObject = {};
   arrayOfEntries.forEach((arr) => {
    if(typeof arr[1] != "object"){
        newObject[`${arr[0]}`] = arr[1];    }
   });
   console.log(newObject);
