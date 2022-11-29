// 2nd example.

function calc(fx,a,b){
    return fx(a,b);
}
function sum(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}

console.log(calc(sum,4,5));
console.log(calc(minus,4,5));