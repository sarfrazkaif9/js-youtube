// https://262.ecma-international.org/5.1/#sec-11.4.3
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "kaifsarfraz"
let anothername = myYoutubeName
anothername = "Chaiorcode"

console.log(myYoutubeName);
console.log(anothername);

// Heap memory allocation

let userOne = {
    email: "sarfrazkaif@gmail.com",
    upi: "sarfraz-kaif1@oksbi"
}

let userTwo = userOne

userTwo.email = "sarfrazkaif9@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
