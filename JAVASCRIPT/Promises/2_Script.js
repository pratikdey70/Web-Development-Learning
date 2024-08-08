function maggiLekarAaunga() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            let dukanKhuliHai = false;
            if(dukanKhuliHai){
                resolve("Maggi Mill Gai");
            }
            else {
                reject("Maggi nahi milli")
            }
        },2000);
    })
   
}

maggiLekarAaunga()
.then(function(msg){
    console.log(msg);
})
.catch(function(data){
    console.log(data);
})