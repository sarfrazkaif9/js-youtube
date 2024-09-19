const accountId = 144553
let accountEmail = "sarfrazkaif@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2  //not alloweed to change constant value
accountEmail = "skb@gmail.com"
accountPassword = "121212"
accountCity = "Patna"
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])