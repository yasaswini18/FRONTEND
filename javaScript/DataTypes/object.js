let obj1  = {
    maths : 100,
    science : 99
}

let obj2 = Object({
    name:"yash",
    age:21
})

let obj3 = new Object({
    eng : 99,
    php: 100
})

console.log(obj1);
console.log(obj2);
console.log(obj3);

//reading values from an object
console.log(obj2.name);
console.log(obj2.age);

//add values to object
console.log(obj3);
obj3.math=98 //math is new key
console.log(obj3);

//delete values from an object
delete obj3.math
console.log(obj3);

//update value of an object
obj3.php=99
console.log(obj3);


//Object Methods
let listOfKeys = Object.keys(obj2)
console.log(listOfKeys);

let listOfValues = Object.values(obj2)
console.log(listOfValues);



