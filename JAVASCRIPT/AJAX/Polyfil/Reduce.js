let arr = [1,2,3,4,5];

Array.prototype.myReduce = function(fun, initValue){
    let arr = this;
    let acc, start_Index;
    if(typeof(initValue) != undefined){
        acc = initValue;
        start_Index = 0;
    }

    else{
        let acc = arr[0];
        let start_Index = 1;
    }
    // fun=(acc,val,index,arr)=>{
    //     return acc * val
    // }

    // Pehle acc mei 0th index ki value ko add karo
   
    for (let i = start_Index; i< arr.length; i++) {
        acc = fun(acc,arr[i],i,arr);
    }
    return acc;
}

let x = arr.myReduce((acc,val,index,arr)=>{
    return acc + val;
},0)

console.log(x);