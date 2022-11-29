//Do the same using switch case.
let age = 100;
switch(true){
    case (age<=12):
        console.log("Child");
        break;
    case (age >= 13 && age <=18):
        console.log("Teen");
        break;
    case (age > 18 && age < 100):
        console.log("Adult");
        break;
    default:
        console.log("Enter valid age..!");
        break;
        
}