//6.Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.

// const promise = () => {
//   setTimeout(() => {
//     console.log(fetch("https://reqres.in/api/users"));
//   }, 2000);
// };

// promise();

const getUsers = (url) => fetch(url);

const newFunc = () => {
  return new Promise((res, rej) => {
    getUsers("https://reqres.in/api/users")
      .then((users) => {
        if (!users) {
          rej("Not Found...");
        }
        console.log("receivedData");
        setTimeout(() => {
          res(users.json());
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

newFunc()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
