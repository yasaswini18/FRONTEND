//var

var age = 2000  //declaring+assigning
var age  //redeclaring
age= 4000 //re-assigning
console.log(age)

console.log(student);  //doesnt give error it will give undefined

var student
student = "yash"
console.log(student)
student="yasaswini"
console.log(student);


//let

// console.log(student02); ReferenceError: Cannot access 'student02' before initialization
let student02  
console.log(student02);
student02 = "Ashish"
console.log(student02);

name="yash"   //internally taking as var and not recommended
console.log(name);


//const

// console.log(admin);ReferenceError: Cannot access 'admin' before initialization
const admin="yash"
// admin="yasaswini" //TypeError: Assignment to constant variable.
console.log(admin);
