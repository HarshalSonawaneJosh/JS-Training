//3.What will be printed to the console when the promise resolves and when it rejects?
const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction: ", err);
  });
};
testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

/*ANS -> When we excecute our code the flow goes to testAsyncFunction() here we are returning promise
  with 2 functions/methods called(resolve/rejects). Whenever we do Math.random() it takes any random number
  between 1. if number greater than 0.5 then resolve takes ("Test Resolve") means our excecution fullfilled or true
  then flow goes to .then block and it will print "Response in then block Test Resolve").and if condition getting false
  then flow goes to .catch block  and it will print "Error caught in testAsyncFunction Test Reject") and flow also goes in .then
  and "print Response in then block undefined" because we are writing .then and .catch after testAsyncFunction() function call.
  */
