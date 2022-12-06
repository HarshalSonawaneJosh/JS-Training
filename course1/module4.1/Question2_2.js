//What happens when you return callback() from the test function?

function Test(callback){
     return callback();      //adding return statement in callback().
     //return callback;        // returns the function.
}

function callbackFunc(){
    console.log("Calling the callback function");
    return 5;
}

console.log(Test(() => callbackFunc()));