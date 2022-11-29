// Javascript Methods.

//Declaring Array.
let v = new Array(1,2,3,'A','B','C',"Harshal","Jayesh","Sonawane",null);

//Displaying the Array using Spread Operator.
const c = console.log(...v);

//Displaying the Array using for..of loop.
for (const details of v) {
    console.log(details);
}

//includes Method ->This method checks if an array includes the element that passes the condition, returning true or false as appropriate.
const check = v.includes("Harshal");
console.log(check);

//map() Method -> This method creates a new array with the results of calling a provided function on every element in this array.
const arr = [1,2,3,4,5,6];
const mapped = arr.map(element => element + 30);
console.log(mapped);

//filter() Method -> This method creates a new array whenever we apply any condition.
const filtered  = arr.filter(element => element == 2 || element == 4);
console.log(filtered);

//sort() Method -> This method is used to arrange/sort array’s elements either in ascending or descending order.
//1.Using Numbers.
const arr1 = [2,1,12,6,11,8,5,9];
const ascend = arr1.sort((a,b) => a > b ? 1 : -1);
console.log(ascend);

//2.Using Alphabets.
const alphabets = ['f','a','c','v','z'];
const descend = alphabets.sort((a,b) => a > b ? -1 : 1);
console.log(descend);

//forEach loop
const arr2 = [1,2,3];
arr2.forEach(element =>  {
    console.log(element);
});

//concat() Method.
console.log(arr.concat(arr2));

//every() Method -> This method checks every element in the array that passes the condition, returning true or false as appropriate.
const greaterFour = arr.every(element => element > 4);
console.log(greaterFour);

//some() Method -> This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.
const lessNum = arr.some(element => element < 2);
console.log(lessNum);

//join() Method ->This method returns a new string by concatenating all of the array’s elements separated by the specified separator.
console.log(alphabets.join(''));

//find() Method -> This method returns the value of the first element in an array.
const arr3 = [1,2,3,4,5,6,7,8,9,10];
const found = arr.find(element => element > 5);
console.log(found);

//findIndex() Method -> This method returns the index of the first element in an array.
const indexFinder = arr.findIndex(element => element == 3);
console.log(indexFinder);

//fill() Method -> This method fills the elements in an array with a static value and returns the modified array.
console.log(arr3.fill(10));

//slice() Method->This method returns a new array with specified start to end elements.
const arr4 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr4.slice(4,9));

const arr5 = [1,2,3,4,5,6,7,8,9,10];
console.log("Splice returns : ",arr5.splice(2,4),arr5);  //from start index to number of elements
//reverse() Method.
console.log(arr4.reverse());

//push() Method -> This method adds one or more elements to the end of array and returns the new length of the array.
const fruits = ["Apple","Peach"];
console.log(fruits.push("Banana")); //returnn new length = 3.
console.log(fruits);

//pop() Method -> This method removes the last element from the end of array and returns that element.
fruits.pop();
fruits.pop();
console.log(fruits);

//shift() Method -> This method removes the first element from an array and returns that element.
const fruits1 = ["Apple", "Banana"];
fruits1.shift();
console.log(fruits1);

//unshift() Method -> This method adds one or more elements to the beginning of an array and returns the new length of the array.
fruits1.unshift("Mango");
console.log(fruits1);
