let arr = [1,2,3,4,5,6]
let arr1 = [1,2,3,4,"Hello",6]

Array.prototype.meraForEach = function(fun){
    let arr = this;
    for(let i=0; i<arr.length ; i++){
        fun(arr[i], i , arr);
    }
}
arr.meraForEach((data,index,arr)=>{
    console.log("Index:", index, "Data:", data , "Arr:" ,arr);
})

// arr1.meraForEach((data,index,arr)=>{
//     console.log("Index:", index, "Data:", data , "Arr:" ,arr);
// })

//Inbuilt forEach
// arr.forEach((data,index,arr)=>{
//     //console.log("Index:", index, "Data:", data , "Arr:" ,arr);
// })

