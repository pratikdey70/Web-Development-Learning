let arr = [1,2,3,4,5];

let newArr = arr.filter((val,index,arr)=>{
    return val%2 !=0;
})

let newArr1 = arr.filter((val)=>{
    return val%2 == 0;
})

console.log(newArr);
console.log(newArr1);