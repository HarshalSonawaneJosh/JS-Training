async function getUsers(url) {
  const response = await fetch(url);
  return;
  response.json();
}
function myFunc() {
  new Promise((res, rej) => {
    let abc = getUsers("https://reqres.in/api/users").then((res) => {
      console.log(res);
    });
  });
}
myFunc();
