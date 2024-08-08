console.log("Hello World");

let inp = document.getElementById('inp')
inp.onchange = function(ev){
    console.log(ev.target.files[0], 'non compresses');
    let file = ev.target.files[0];

    const options = { 
        maxSizeMB: 1,          // (default: Number.POSITIVE_INFINITY)
      }
      
    imageCompression(file, options)
    .then(res=>{
        console.log(res, 'compressed');
    })
}