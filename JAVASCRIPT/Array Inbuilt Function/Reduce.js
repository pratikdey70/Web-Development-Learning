let arr = [1,2,3,4,5]

let sum = arr.reduce((acc,val)=>{
    return acc+val;
})

let product = arr.reduce((acc,val)=>{
    console.log(acc,val);
    return acc*val;
},1)

console.log(sum);
console.log(product);