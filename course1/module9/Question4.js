//Create a blog list page that fetches a list of users from a mock API and adds them to a table on the page after loading. Add a button to sort the users by name. Add an input to filter the table by search. (Optional: Show “Loading…” or a loading spinner on the screen till the data loads)
let persons = [];
async function getUsers(url) {
  const response = await fetch(url);
  const data = await response.json();
  persons = data.data;
  show(data.data);
}

function myFunc() {
  getUsers("https://reqres.in/api/users");
}

myFunc();

function show(data) {
  let tab = `<tr>
        <th>id</th>
        <th>email</th>
        <th>first_name</th>
        <th>last_name</th>
        <th>avatar</th>
    </tr>`;

  for (let r of data) {
    tab += `
    <style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
<tr>
        <td>${r.id}</td>
        <td>${r.email}</td>
        <td>${r.first_name}</td>
        <td>${r.last_name}</td>
        <td><img src="${r.avatar}"></img></td>
    </tr>`;
  }
  document.getElementById("Employees").innerHTML = tab;
}

//Add a button to sort the users by name.
function sortUserByName() {
  persons.sort((a, b) => (a.first_name > b.first_name ? 1 : -1));
  show(persons);
}

const filterByName = () => {
  const searchQuery = document.getElementById("site-search").value;
  const filteredPerson = persons.filter((p) =>
    p.first_name.includes(searchQuery)
  );
  show(filteredPerson);
};
