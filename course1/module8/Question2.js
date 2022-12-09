//2.Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). Log the data into the console once it is received

// const promise = fetch("https://reqres.in/api/users");
// promise.then((value) => {
//   console.log(value);
// });

const user = (url) => {
  const fetchResult = fetch(url);
  fetchResult
    .then((res) => res.json())
    .then((d) => {
      console.log(d);
    });
};
user("https://reqres.in/api/users");
