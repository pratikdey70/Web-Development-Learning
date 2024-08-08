let arr = [1,2,3,4,5]

let newArr = arr.map(function(val,index,arr){
    console.log("Val",val,"Index",index, "Arr" , arr);
    return val*val;
})

console.log(newArr);


// Another way
let newArr1 = arr.map(value=>value*value);
console.log(newArr1);

let boolArr = arr.map((val)=>{
    if(val%2==0) return true;

    else return false;
})
console.log(boolArr);