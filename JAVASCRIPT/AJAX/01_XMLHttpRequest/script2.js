const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");

function getData(url) {
  return new Promise((resolve, reject) => {
    // 1. Create the XML Http Request
    let xml = new XMLHttpRequest();

    // 2. Setup karna request ko
    //let url = "https://cat-fact.hrokuapp.com/facts";
    xml.open("GET", url);

    // 3. Success hone pe requqet ko kya karna hai?
    xml.onload = (res) => {
      //console.log(res.target.res);
      let data = JSON.parse(res.target.response);
        resolve(data);
      
    }

    // 4. Failure hone par request ke kya karna hai?
    xml.onerror = (err) => {
      reject(err);
    }

    xml.send();  //Request bhej do
  });
}

btn.addEventListener("click", () => {
    getData('https://cat-fact.herokuapp.com/facts')
        .then((data)=>{
            ul.innerText= '';
            data.forEach((d)=> {
                let li = document.createElement('li');
                li.innerText = d.text;
                ul.appendChild(li)
        })
    }).catch(err=>{
        console.log(err);
    })
});
