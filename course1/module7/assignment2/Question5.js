//Write a function to filter an array of strings to hold only unique values
//This should return an array of users in the format:
let str = ["apple", "mango", "banana", "gauva", "apple", "mango"];
let str1 = [];
let count;
for (let i = 0; i < str.length; i++) {
  count = 0;
  for (let j = i + 1; j < str.length; j++) {
    if (str[i] == str[j]) {
      count++;
    }
  }

  if (count == 0) {
    str1.push(str[i]);
  }
}

console.log(str1); // OP -> [ 'banana', 'gauva', 'apple', 'mango' ]
