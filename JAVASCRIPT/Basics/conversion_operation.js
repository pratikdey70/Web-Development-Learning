let score = 33;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "22" => 22
// "22abc" => NAN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true ; 0 => false
// "" => false
// "Pratik" => true
 
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));

// ****************** OPERATIONS ***************//

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2**2);
console.log(2*2);
console.log(4/2);
console.log(2%3);
console.log(4-2);

let str1 = "Hello"
let str2 = " Pratik"

let str3 = str1+str2
console.log(str3);

console.log("1" + 2);
console.log(1+"2");
console.log("1"+2+2);  //output => 122
console.log(2+2+"1");  //output => 41

console.log( 3 + 4 * 5 % 3);

console.log(+true);  //output => 1
console.log(true);  //output => true

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter--;    //output => 99
gameCounter++;   //output => 101
console.log(gameCounter);