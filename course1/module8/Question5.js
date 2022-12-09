//5. What will be printed to the console?
const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction", err);
    throw new Error("Forced error");
  });
};
testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

/*
  //OP ->
  if(true) then print -> Response in then block:  Test Resolve
  else ->Error caught in testAsyncFunction Test Reject
    Error in catch block:  Error: Forced error
    at Promise.catch (/home/josh/js_training/JS-Training/course1/module8/Question5.js:11:11)
    at process._tickCallback (internal/process/next_tick.js:68:7)
    at Function.Module.runMain (internal/modules/cjs/loader.js:834:11)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
  */
