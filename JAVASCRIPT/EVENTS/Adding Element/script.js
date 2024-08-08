let cntValue = document.querySelector('.cntValue');
let reducebtn = document.querySelector('.reduce');
let updatebtn = document.querySelector('.update');

updatebtn.addEventListener('click',()=>{
    //alert("Just updated the value bro!")
    //console.log(parseInt(cntValue.innerText+1));
    //console.log(+cntValue.innerText);
    console.log(Number(cntValue.innerText)+1);
})

reducebtn.addEventListener('click', ()=>{
    alert("REdce the value gandu");
})