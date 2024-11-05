// datatypes are of two types
// 1.Primitive 
//     it have 7 types:
//         -String
//         -Number
//         -Boolean
//         -null
//         -undefined
//         -Symbol (to make it unique)
//         -BigInt

//string
let name = "Kaif"

//number
const score = 100
const scorevalue = 100.3
//Boolean
const isLoggedIn = false
//null
const outsideTemp = null
//undefined
let userEmail;
//Symbol
const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 35346565463466345653n



// 2.Non-primitive (Reference data type)
//     it have 3 types
//         -Array
//         -Objects
//         -Functions

//Array
const heros = ["shaktiman","naagraj","doga"]

//objects
let myObj = {
    name:"kaif",
    age:24,

}

//Function
const myFunction = function(){
    console.log("Hello kaif!");
}

// How to ientify detatypes 
//"typeof" is used to find datatypes
console.log(typeof name);
console.log(typeof score);
console.log(typeof scorevalue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp); // in case of null typeof always return it as  Object .
console.log(typeof userEmail);
console.log(typeof anotherId);


console.log(typeof myFunction);
console.log(typeof myObj);  // always return as object type
console.log(typeof heros);  //arrays also returned as object type
