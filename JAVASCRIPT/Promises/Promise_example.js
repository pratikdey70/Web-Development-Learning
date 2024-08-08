function download(url){
    return new Promise(function(resolve,reject){
        console.log("Downloading starts");
        setTimeout(function(){
            let extension = url.split('.').pop();
            if(['webp','png','jpg'].indexOf(extension) != -1){
                let img = url.split('/').pop();
                resolve(img);
            }
            else{
                reject("Abey url toh sahi ded");
            }
        },2000);
    })
}

function compress(file){
    return new Promise(function(resolve,reject){
        console.log("Compression starts of", file);
        setTimeout(function(){
            let compressedImg = file.split('.')[0] + '.zip';
            console.log("Compression Completed", compressedImg);

            resolve(compressedImg)
        },2000);
    })
}

function upload(file){
    return new Promise(function(resolve,reject){
        console.log("Uploading starts of", file);
        setTimeout(function(){
            let newLink = 'http://newsite.com/' + file;
            console.log("Uplaoding Completed", newLink);
            resolve(newLink);

        },2000);
    })
}

download('http://mysite.com/avengers.jpg')
    .then(function(img){
        console.log("Download Completed",img);
        return img;
    })
    .then(compress)
    .then(upload)
    .then(function(newLink){
        console.log("Everything Done");
    })
    .catch(function(err){
        console.log(err);
    })