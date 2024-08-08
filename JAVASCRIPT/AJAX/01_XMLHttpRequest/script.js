const btn = document.querySelector('.btn')
const ul = document.querySelector('ul')
// 1. Create the XML Http Request
let XML = new XMLHttpRequest();

// 2. Setup karna request ko
let url = 'https://cat-fact.hrokuapp.com/facts';
XML.open('GET',url);

// 3. Success hone pe requqet ko kya karna hai?
xml.onload = (res) =>{
    //console.log(res.target.res);
    let data = JSON.parse(res.target.response);
    data.forEach((d)=> {
        let li = document.createElement('li');
        li.innerText=d.text;
        ul.appendChild(li)
    })
}



// 4. Failure hone par request ke kya karna hai?
xml.onerror = (err) =>{
    console.log(err);
}

btn.addEventListener('click', ()=>{
    xml.send();
})

