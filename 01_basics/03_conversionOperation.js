// for number value
let score1 = 33
console.log(typeof(score1));
console.log(typeof score1); // another way to write typeof


// for string writen under ""
let score2 = "33"
console.log(typeof(score2));

let valueInNumber2 = Number(score2)
console.log(typeof(valueInNumber2));
console.log(valueInNumber2);


// for alpha numeric value
let score3 = "33abc"
console.log(typeof(score3));

let valueInNumber3 = Number(score3)
console.log(typeof(valueInNumber3));
console.log(valueInNumber3);


// for null value
let score4 = null
console.log(typeof(score4));

let valueInNumber4 = Number(score4)
console.log(typeof(valueInNumber4));
console.log(valueInNumber4);


// for undefined value
let score5 = undefined
console.log(typeof(score5));

let valueInNumber5 = Number(score5)
console.log(typeof(valueInNumber5));
console.log(valueInNumber5);


// for boolean value
let score6 = true
console.log(typeof(score6));

let valueInNumber6 = Number(score6)
console.log(typeof(valueInNumber6));
console.log(valueInNumber6);

// for string value
let score7 = "Kaif"
console.log(typeof(score7));

let valueInNumber7 = Number(score7)
console.log(typeof(valueInNumber7));
console.log(valueInNumber7);

// "33" => 33
// "33abc"=> NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "kaif" => true

let someNumber = 44
console.log(typeof someNumber);
let stringNumber = String(someNumber); // ocnverts number to string value
console.log(stringNumber);
console.log(typeof stringNumber);

//