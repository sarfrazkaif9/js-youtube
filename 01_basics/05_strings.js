const name = "kaif"
const repoCount = 50 
// low readability 
console.log(name + repoCount + "value");

// high readability
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('kaif-srz')  

console.log(gameName[0]); // prints string value at position 0 
console.log(gameName.__proto__);

console.log(gameName.length); // gives total length of string
console.log(gameName.toUpperCase()); // shows string in uppercase
console.log(gameName.charAt(3)); // letter at poosition 3
console.log(gameName.indexOf('f')); // shows position of given letter in string

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "  kaif  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kaif.com/kaif%20sarfraz"

console.log(url.replace('%20','-')); // replacing %20 with -

console.log(url.includes('sundar'));// check if sundar is on url

console.log(gameName.split('-'));//split on the basis of -
