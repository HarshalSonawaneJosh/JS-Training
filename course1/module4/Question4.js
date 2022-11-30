/*4.What happens if you pass a regular/invalid JSON string to JSON.parse? 
What will happen if such an invalid function runs in the program? Will other parts of the code execute correctly after that?
*/

//for regular
console.log(typeof JSON.parse('{"Harshal" : "sonawane"}'))

//for invalid
//console.log(typeof JSON.parse('{"Harshal" = "sonawane"}'))

console.log( JSON.parse('{"Harshal" : "sonawane"}')) //valid
console.log(JSON.parse(null))  //valid for null ...and typeof null is also object.
console.log( JSON.parse(3))   //valid for number
console.log( JSON.parse(undefined))  //invalid
console.log( JSON.parse('{"abc":""}'))  //valid for empty string also.
console.log(JSON.parse(function (a){}))  //invalid
console.log(typeof JSON.parse(Date));  //invalid coz date also fucntion.

function abc(str){
    let newStr = (JSON.parse(str));
    console.log("runs successfully");
    return newStr;
}
//console.log(abc("Harshal"));
console.log(abc('{"Harshal" : "sonawane"}'));

/*Whenever we pass string which is not json string as parameter to a function it will throw error.But in case of we pass with json string then json.
parse method parse the string to a Object.*/
