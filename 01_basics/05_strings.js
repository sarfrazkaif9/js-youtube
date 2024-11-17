const name = "kaif"
const repoCount = 50 
// low readability 
console.log(name + repoCount + "value");

// high readability
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('kaifsrz')  

console.log(gameName[0]); // prints string value at position 0 
console.log(gameName.__proto__);

console.log(gameName.length); // gives total length of string
console.log(gameName.toUpperCase()); // shows string in uppercase
console.log(gameName.charAt(3)); // letter at poosition 3
console.log(gameName.indexOf('f')); // shows position of given letter in string

const newString = gameName.substring(0,4)
console.log(newString);
