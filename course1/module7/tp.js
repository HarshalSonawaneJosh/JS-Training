// const months = ['jan','march','may'];
// console.log(months);
// months.splice(1,0,'feb');
// console.log(months);
// months.splice(3,0,'april');
// console.log(months);
// console.log(months.slice(1,4));
// console.log(months);

// let arr = [1, 2, 5];

// // from index -1 (one step from the end)
// // delete 0 elements,
// // then insert 3 and 4
// arr.splice(-2, 0, 3, 4);
// console.log(arr);

// let arr = ["t", "e", "s", "t"];

// console.log( arr.slice() ); // e,s (copy from 1 to 3)

// console.log( arr.slice(-3) ); // s,t (copy from -2 till the end)

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     console.log(`${item} is at index ${index} in ${array}`);
//   });

//   ["a","b","c"].forEach((element,index,array) => {
//     console.log(`${element} at index ${index} in ${array}`);
//   });

// let arr = [NaN];
// console.log(arr.includes(NaN))

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "pete"},
//     {id: 3, name: "mary"}
// ];

// let user = ["harshal","shubhangi","jayesh"].map(item =>item.length);
// console.log(user);

// let arr = [1,4,2,6,4,3];
//  arr.sort();
// console.log(arr);
// //console.log(arr1);

// let countries = ['Österreich', 'Andorra', 'Vietnam'];
// console.log(countries.sort((a,b) => a.localeCompare(b)));

// let names = ['harshal','jayesh','ram'];
// let arrr = names.split(',');
// for (let name of arrr){
//     console.log((`A message to ${name}.`));
// }

// let arr = [1,2,3,4,5];
// let res = arr.reduce((accmltr,item) => (accmltr+item),85);
// console.log(Object.isFrozen({}));

//camelize("background-color") == 'backgroundColor';
//camelize("list-style-image") == 'listStyleImage';
//amelize("-webkit-transition") == 'WebkitTransition';
let  str1 =" ";
let str = "background-color"
for (let i = 0; i < str.length; i++) 
{
    if(str[i] == '-')
{
    for (let j = i+1; j < str.length; j++) 
   {
     str1.concat(str[j]);
   }
}
   str1 = str1 + str[i];
}
console.log(str1)