/*
5. Can you use return instead of break in loops?

ANS -> No. return jumps back directly to the function call returning the value after it and 
everything (in a function) that is after an executed return statement is ignored. 
So return itself can act as a break statement for functions and no further break is required.
*/

function returnMe(){
    let arr = [1,2,3,4,5,6,7,8,9,10];
    for(let i = 0; i < arr.length; i++)
    {
        if (arr[i] == 5)
        return i;
    }
}
function returnMe1(){
    let arr = [1,2,3,4,5,6,7,8,9,10];
    for(let i = 0; i < arr.length; i++)
    {
        if (arr[i] == 5)
        break;
    }
}
let returnStatement = returnMe();
console.log(returnStatement);
let returnStatement1 = returnMe1();
console.log(returnStatement1);