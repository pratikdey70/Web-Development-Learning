let arr = [1,2,3,4,5];

// let newArr = arr.map((val,index,arr)=>{
//     return val*val
// })
//map does not modify the previous 

//console.log(newArr);

//Trying to build our own map built function
Array.prototype.myMap = function(fun){
    let arr = this;
    let newArr = []
    //Update newArr
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        let newVal = fun(val,i,arr);
        newArr.push(newVal);
        
    }
    return newArr;
}

let x= arr.myMap((val,index,arr)=>{
    return val*val;
});

console.log(x);