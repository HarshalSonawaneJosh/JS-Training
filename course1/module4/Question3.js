//3.Do you think JSON.stringify would work for arrays as well? What about nested objects? What happens if we pass numbers, strings, undefined, null to JSON.stringify?

// for arrays.
let arr = [1,2,3,4,5];
console.log(JSON.stringify(arr));

//for nested object.
let obj =  {
    "name" : "Harshal",
    "lname" : "Sonawane",
    obj2:{
        name2 : "Shubham",
        lname2 : "More"
    }
}
console.log(JSON.stringify(obj))

// by passing another values.
console.log(typeof JSON.stringify(5));
console.log(typeof JSON.stringify("Harshal"));
console.log(typeof JSON.stringify(null));
console.log(typeof JSON.stringify(undefined));

