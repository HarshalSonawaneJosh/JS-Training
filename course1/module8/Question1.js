//1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument

const func = async () => {
  console.log("Printing before");
  //Call your function here eg. sleep(3000)
  setTimeout(function () {
    console.log("Printing after");
  }, 3000);
};

func();
