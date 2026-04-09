// greet()  //can access before declaration incase of simple or named function
// function greet() //function declaration
// {
//     console.log("Hello");
// }
// greet()  //function calling

// //Two types of Functions - Parameterized, non-parameterized
// function addition(a,b,c,d)
// {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);  
//     console.log(arguments[0]); 
// }
// addition(1,2,3,4)
// addition("hi","hello","bye") //this also works but give undefined for not given value

// function displayListOfAngularStudents()
// {
//     console.log(arguments);
//     console.log(arguments[0]);  //can be used inside the function only
// }
// displayListOfAngularStudents("yash","anugya","anvi","sweta")

// //return type of function
// function interval()
// {
//     console.log("Take break");
// }
// let result = interval()  //no return type  - undefined
// console.log("return type: ",typeof result);

// function interval1()
// {
//     console.log("Take break");
//     return "Take break"
//     console.log("this line will not execute");
    
// }
// let result1 = interval1()  //no return type  - undefined
// console.log("return type: ",typeof result1);


// //ways to define function
// //1.simple function / named function - we saw above
// //2.function expression  -named function , anonymous function, arrow function

// let funExpression = function hello(name1,name2){ console.log("Hello World",name1," ",name2);
// }
// console.log(funExpression);
// funExpression("yash","anugya");
// // hello() gives error
// console.log(typeof funExpression);

//Function Expression with anonyous function
// const fun = function()
// {
//     console.log("Thursday");
    
// }
// fun()

//Function Expression with Arrow Function
// const arrowFn = () => 54  //only one value , {},return not required
// console.log(arrowFn());
// console.log(arrowFn); //variable is not storing value
// let resultFromArrrowFunc = arrowFn()
// console.log(resultFromArrrowFunc);

// const arrowFun = ()=> 45+ +"45"
// console.log(arrowFun());

// const arrowFun1 = ()=> "45"+45
// console.log(arrowFun1());

// const arrowFun2 = ()=> 45 + "45"
// console.log(arrowFun2());

//most minimalistic way using one parameter - parenthesis,{},return statement not required
// const arrowFun3 = value1 => value1
// console.log(arrowFun3("yasaswini"));

//multiple parameters
// const arrowFun4 = (v1,v2)=>{
//     console.log(v1);
//     console.log(v2);
//     console.log(arguments);
//     return v1+v2
// }
// let resultFromArrowFunc4 = arrowFun4(3,4);
// console.log(resultFromArrowFunc4);

// way3 of defining a function - High order function and call back function
// function calculator(v1,v2,callbackFun)
// {
//     return callbackFun(v1,v2)
// }

// let addition = calculator(10,20,(a,b)=>a+b)
// let subraction = calculator(10,20,(a,b)=>a-b)
// let multiplication = calculator(10,20,(a,b)=>a*b)
// let division = calculator(20,10,(a,b)=>a/b)
// let modulo = calculator(20,10,(a,b)=>a%b)
// let concatenation = calculator("Hi","Class",(a,b)=> a+" "+b)
// console.log(addition);
// console.log(subraction);
// console.log(multiplication);
// console.log(division);
// console.log(modulo);
// console.log(concatenation);

// let array01 = [10,44,66,77,355]
// array01.sort((a,b)=>a-b)  //ascending
// console.log(array01);
// array01.sort((a,b)=>b-a) //descending
// console.log(array01);


//way04 of creating a function - RECURSIVE FUNCTION
// function recursive()
// {
//     recursive()
// }
// recursive() //RangeError: Maximum call stack size exceeded

//To avoid this we need a base condition
function findTheSumOfADigit(n)
{
    console.log(n*(n+1)/2);   
}
findTheSumOfADigit(5);

let result=0
function findTheSumOfADigit01(n)
{
    for(i=0;i<=n;i++)
    {
        result = result+i
    }
    console.log(result);
}
findTheSumOfADigit01(5);

function findTheSumOfADigit02(n)
{
    if(n==0) return 0
    return n+findTheSumOfADigit02(n-1)
}
let res =findTheSumOfADigit02(5)
console.log(res);

//find the factorial of a number using recursive function
function factorial(n)
{
    if(n==1) return 1
    return n*factorial(n-1)
}
let resOfFactorial = factorial(5)
console.log(resOfFactorial);
