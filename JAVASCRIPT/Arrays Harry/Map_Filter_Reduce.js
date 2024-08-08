let num = [1,2,3,4,5]
let a = num.map((value,index,array)=>{
    console.log(value,index , array);
    return value + index;
})
console.log(a);




// Array filter method
let arr2 = [34,45,56,86,34]
let a2 = arr2.filter((a)=>{
    return a<50
})

console.log(a2,arr2);


// Reduce method
let arr3 = [1,2,3,5,6,7,8]
let newArr = arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newArr);