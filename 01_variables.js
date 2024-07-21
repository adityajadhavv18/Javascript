const account_id = "12334"
let accountemail = "adi@gmail.com"
var accountpw = "9876"
acountcity = "pune"
let accountState;

// account_id ="2" not allowed as const gives a unique identity and doesnt allow changes 

accountemail = "aji@gmail.com"
accountpw = "3456"
accountcity = "kanpur"

console.log(account_id)

console.table([accountemail,accountpw,acountcity,accountState])

/*
Prefer not to use var due to issue in block scope and functional scope

- var and let can be changed or updated 
- and variable can be also directly declared without specifying the keyword and updated to 
- a variable without a value assigned becomes undefined
*/