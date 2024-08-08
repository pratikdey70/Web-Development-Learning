let p = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(); //will be called after 5 seconds
    },5000);
})

p.then(function(data){
    console.log("Resolve wala function run ho gaya");
})

.catch(function(err){
    console.log(err);
})