//Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.
//7.Complete the above tasks with async/await.

const getUsers = async (url) => await fetch(url);

const func = () => {
  return new Promise((res, rej) => {
    getUsers("https://reqres.in/api/users")
      .then((user) => {
        if (!user) {
          console.log("Rejected..");
        }
        console.log("Data Fetched..");
        setTimeout(() => {
          res(user.json());
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

func()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
