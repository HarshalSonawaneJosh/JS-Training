// Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).

let userNames = [
  {
    id: 1,
    first_name: "Nicki",
  },
  {
    id: 2,
    first_name: "Raychel",
  },
  {
    id: 3,
    first_name: "Demetris",
  },
  {
    id: 4,
    first_name: "Amata",
  },
  {
    id: 5,
    first_name: "Harsh",
  },
];
let userEmails = [
  {
    id: 2,
    email: "rmcgrady1@cpanel.net",
  },
  {
    id: 1,
    email: "ncrozier0@squarespace.com",
  },
  {
    id: 4,
    email: "abraiden3@canalblog.com",
  },
  {
    id: 3,
    email: "dkilshall2@elpais.com",
  },
];

function mergeById(userNames, userEmails) {
  let mergedArray = new Array();
  userNames.forEach((element) => {
    userEmails.find(function (post, index) {
      if (userEmails[index].id == element.id) {
        Object.assign(element, { email: userEmails[index].email });
        mergedArray.push(element);
      }
    });
  });
  return mergedArray;
}
