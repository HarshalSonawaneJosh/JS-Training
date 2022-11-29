//3.Declare a variable let arraySize = 25;. Using a for loop, add numbers from one onwards into an array till the arraySize is reached.
let a = [];
for (let i=1; i<=25; i++){
    a.push(i);
}
for (let index = 0; index < a.length; index++) {
    console.log(a[index]);
}