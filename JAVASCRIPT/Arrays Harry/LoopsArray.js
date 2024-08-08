// Loops in JS
let num = [3 , 5, 7, 2 , 9]
for (let index = 0; index < num.length; index++) {
    const element = num[index];
    console.log(element);
    
}


// 2.forEach.Loop
num.forEach((element)=>{
    console.log(element*element);
})



// 3.Array.from
let name = "Pratik"
let arr = Array.from(name)   //Used to create an array from any other object
console.log(arr);


// 4.for.....of
for(let item of num){
    console.log(item);
}


// 5.for...in
for(let i in num){
    console.log(num[i]);
}