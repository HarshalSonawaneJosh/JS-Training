// Write a function that sorts an array of objects by the key that is passed in the second argument, and in the order passed as the 3rd argiment.
let users = [
  {
    id: 4,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 1,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 3,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];

const sort = (users, key, type) => {
  if (type === "desc") {
    return users.sort((a, b) => (a[key] < b[key] ? 1 : -1));
  } else {
    return users.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  }
};

console.log(sort(users, "id", "desc")); //Should return users sorted by id in descending order
console.log(sort(users, "first_name", "desc")); //Should return users sorted by first_name in ascending order
