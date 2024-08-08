//let p = new Promise(function(resolve,reject){});
// resolve ko call karna matlab fulfill ho gaya
// reject ko call karna mtlb fail ho gaya


//p.then(resolveFun, rejectFun);
// p.then(resolveFun).catch(rejectFun);

let kyaVaadaPooraHua = true;

let p = new Promise(function(resolve,reject){
    if(kyaVaadaPooraHua){
        resolve("Vada Poora kar diya");
    }
    else{
        reject("Aisi taisi kardi vaade ki");
    }
})

p.then(function(msg){
    console.log("Message aya hai",msg);
},function(err){
    console.log("Error aya hai",err);
});

//Another way 
p.then(function(msg){
    console.log("Message aaya hai",msg);
})
.catch(function(err){
    console.log("Error aya hai", err);
})
