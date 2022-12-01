/*1.What is the difference between ++i and i++?
Ans -> ++i is called as pre-increment.in this case value is increased first then assigned.But in case of
 i++ (post-increment) the value is assigned to variable first then it incremented.
 */

 let i = 5, j;
 j = i++;
 console.log("i = "+i + " j = " +j);


 let a = 5,b;
 b = ++a;
 console.log(" a = " +a+ " b = " +b)