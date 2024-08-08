// Q.1 Create an array of numbers and take input from the user to add numbers to the array
let arr = [1,2,3,4,5]





// Q.2 keep adding numbers to the array in 1 until 0 is added to the araray
let arr2 = [1,2,3,4,5,6]








// Q.3 Filter for numbers divisible by 10 from a given array
let num = [10,34,89,90,100]


let newArr = num.filter((value)=>{
    return value%10 == 0;
})

console.log(newArr);



// Q.4 Create an array of square of given numbers
let arr3 = [1,2,3,4,5]
for (let index = 0; index < arr3.length; index++) {
    const element = arr3[index];
    console.log(element*element);
}

// using map method
let a = arr3.map((value,index,array)=>{
    return value*value;
})
console.log(a);


// Q.5 Use reduce to calculate factorial of a given number from an array of first n natural number 
let arr4 = [1,2,3,4,5];
let product = arr4.reduce((n1,n2)=>{
    return n1*n2;
})
console.log(product);