function padaikar(cb){
    console.log("Sabse Pehle toh Padhai");
    setTimeout(function(){
        console.log("Padai se hee banoge nawab");
        cb(shaadi);
    },2000);
}

function naukri(cb){
    console.log("Naukri se Ghar chalega");
    setTimeout(function(){
        console.log("Naukri kar, Paise Kamao");
        cb(retire);
    },2000);
}

function shaadi(cb){
    console.log("Shaadi karna ka time aagaya");
    setTimeout(function(){
        console.log("Shaadi kar parivar age bada");
        cb();
    },2000);
}

function retire(){
    console.log("Bohot ho gayi naukri ab, bas kar");
    setTimeout(function(){
        console.log("Time to give up all your duties");
    },2000);
}

padaikar(naukri)
