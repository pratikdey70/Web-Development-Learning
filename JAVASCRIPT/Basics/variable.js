const accoutnId = 1445387
let accountEmail = "pratik@gmail.com"
var accountPassword = "1234"
accountCity = "jaipur"

/*
    Prefer not to use var 
    because of issues in block scope 
    and functional scope
*/

//accoutnId=2
accountEmail = "Bishal@gmail.com"
accountPassword="1234567"
accountCity="Delhi"

console.log(accoutnId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

//Above method is difficult to write so another way to print all are:-

console.table([accoutnId , accountEmail, accountPassword, accountCity]);