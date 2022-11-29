/*What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break?
 Do statements after the loop run? What is the return value? Can we pass a return value from within a loop?
 Can you return from inside an if block? What impact does that have?
 */

 //Using for loop.
 function myFunction(){
 for (let index = 0; index < 10; index++) {
    if(index == 2)
    return index;
 }
}
const forLoop = myFunction();
console.log(forLoop);

//Using while loop.
function myFunction1(){
    let index = 1;
    while(index < 10) {
       if(index == 2){
       return index;
       }
       index++;
    }
   }

const whileLoop = myFunction();
console.log(whileLoop);

//Using switch case.
function myFunction2(){
let key = 1;
switch (key) {
    case 0:
        return "Sunday";
    case 1:
        return "Monday";
    case 2:
        return "Tuesday";
    case 3:
        return "Wednesday";
    case 4:
         return "Thursday";
    case 5:
        return "Friday";
    case 6:
        return "Saturday";
    default:
        return "Choose correct number.!";
}
}

const switchCase = myFunction2();
 console.log(switchCase);
