let movie = document.querySelectorAll('.movie');
let body = document.querySelector('body');

/*movie.forEach((item)=>{
    console.log(item);
    item.style.color = 'blue';
    item.style.fontSize = '20px';
    item.style.backgroundColor = 'black';
    item.style.listStyle = 'none'
})*/



//Website ko Disco banate hai chalo
let x=1;

setInterval(()=>{
    x= 1 - x;
    if(x){
        body.style.backgroundColor = 'black'
        body.style.color = 'red';
    }
    else{
        body.style.backgroundColor = 'white'
        body.style.color = 'black';
    }
    
},1000);


// SET INTERVAL KA USECASE
/*setInterval(()=>{
    console.log("Hello");
},1000);

setTimeout(()=>{
    clearInterval(id);
},5000); */

