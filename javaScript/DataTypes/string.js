//STRING
let day01 = "Sunday"
console.log(day01);
day01='Monday'  //OVERRIDDEN
console.log(day01); 
let day02 = `tuesday`
day02[2]= "y" //this is not happening because string is immutable
console.log(day02);



//LIST OF STRING METHODS
let message01 = " Be Attentive in class "
console.log("To uppercase",message01.toUpperCase());
console.log("To Lowercase",message01.toLowerCase());
console.log("Length of string",message01.length)
console.log("Total length after removing the spaces at the start and end",message01.trim().length);
console.log(message01.trim());
console.log("Does message01 contains the word class",message01.includes("class"));
console.log(`Does it contains class -- ${message01.includes("class")}`);




let myName = "yasaswini"
console.log(myName.indexOf('a'));
console.log(myName.lastIndexOf('a'));



