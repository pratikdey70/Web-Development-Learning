// setTimeout(function(){
//     console.log("Mummy Maggi Banado");
// },2000);

// setTimeout(()=>{
//     console.log("khud banale, mere liye bhi bana dena chal");
// },2000);

// setTimeout(()=>{
//     console.log("Hatash hokar yuvak ne khud hi maggi banai");
// },2000);

// setTimeout(()=>{
//     console.log("Barthan bhi dho dena");
// },2000);

console.log("Let's solve the issue");

function mummyMaggiBanado(cb){
    setTimeout(function(){
        console.log("Mummy maggi banado");
        cb(maggiBananaStart);
    },3000);
}

function marketJakeSabjiLa(cb){
    setTimeout(function(){
        console.log("market ja ke sabji le ana");
        cb();
    },3000);
}



function maggiBananaStart(){
    setTimeout(function(){
        console.log("Maggi banana start");
    },3000);
}

mummyMaggiBanado(marketJakeSabjiLa);

marketJakeSabjiLa(maggiBananaStart)