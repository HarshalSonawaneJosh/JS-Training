//Write a function mapBy to convert an array of objects into an object mapped by the specified key:

 let users = [{
"id": 1,
"first_name": "Nicki",
"email": "ncrozier0@squarespace.com",
"date_of_birth": "2009/05/09"
}, {
"id": 2,
"first_name": "Raychel",
"email": "rmcgrady1@cpanel.net",
"date_of_birth": "1996/11/05"
},];



let mapBy =(users,key)=>{
    let obj = {};
    users.map((user) => obj[user[key]]=user)
    return obj;
};

console.log(mapBy(users,"date_of_birth"));
