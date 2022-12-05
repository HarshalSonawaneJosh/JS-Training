const arr = [3, 4, 15, 4, 2, 4, 2, 1];
abc = (a, b) => {
  return arr.sort((a, b) => (a > b ? 1 : -1));
};
console.log(abc(arr));
