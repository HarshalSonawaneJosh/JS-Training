//1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument

const func = async (milliseconds) => {
  console.log("Printing before");
  //Call your function here eg. sleep(3000)
  setTimeout(function () {
    console.log("Printing after");
  }, milliseconds);
};

func(3000);

//Hello World;
