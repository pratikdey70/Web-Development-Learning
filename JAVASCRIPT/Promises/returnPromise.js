let url = 'mywebsite.com/movie.mp3';

let p = new Promise(function(resolve,reject){
    setTimeout(function(){
        let extension = url.split('.').pop();
        if(extension != 'mp4') return reject("Abey url toh sahi dede");
        resolve("hello");
    },2000);
})

p.then(function (msg){
    console.log(msg);
    return "World";
}).then(function (newmsg){
    console.log(newmsg);
}).catch(function(err){
    console.log(err);
})

/*p.then(function(msg){
    console.log(msg);
    return "World";
}).catch(function(err){
    console.log(err);
}).then(function(newmsg){
    console.log(newmsg);
})
.catch(function(err){
    console.log(err);
})*/