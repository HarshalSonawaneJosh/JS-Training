/*What makes a method mutating or non mutating in Javascript? Find out whether each of the following methods are mutating or non-mutating.
How can you verify this?:
push
pop
filter
find
sort
map
 */

//push method : -> it is immutable because we can change the contains of an array.
const arr = [1,2,3,4,5,6];
console.log(arr);  //[1,2,3,4,5,6]
const add = arr.push(7);
console.log(add);  // 7
console.log(arr);  // [1,2,3,4,5,6,7]

//pop method: ->     it is immutable because we cannot change the contains of an array.
const arr1 = [1,2,3,4,5,6];
console.log(arr1);           //[1,2,3,4,5,6]
const remove = arr1.pop();   
console.log(remove);         // 6
console.log(arr1);           //[1,2,3,4,5]

//filter method: -> it is immutable because we cannot change the contains of an array.
const arr2 = [1,2,3,4,5,6];  
console.log(arr2);           //[1,2,3,4,5,6]
const filtered = arr2.filter(element => (element > 3));
console.log(filtered);    //[4,5,6]
console.log(arr2);        //[1,2,3,4,5,6]

// // find method: -> it is immutable because we cannot change the contains of an array.
const arr3 = [1,2,3,4,5,6];  
console.log(arr3);           //[1,2,3,4,5,6]
const finding = arr3.find(element => (element > 3));  
console.log(finding);   // 4
console.log(arr3);      //[1,2,3,4,5,6]

//sort method: -> it is mutable because we can change the contains of an array.

const arr4 = [2,4,5,19,30,6];  
console.log(arr4);
const sorting = arr4.sort((a,b) => (a-b));
console.log(sorting)
console.log(arr4);


//map mehtod: ->  it is immutable because we cannot change the contains of an array but we can create original array.

const arr5 = [1,2,3,4,5];  
console.log(arr5);   //[1,2,3,4,5]
const mapping = arr5.map(multiply => (multiply * 5));
console.log(mapping)   //[5,10,15,20,25]
console.log(arr5);     //[1,2,3,4,5]