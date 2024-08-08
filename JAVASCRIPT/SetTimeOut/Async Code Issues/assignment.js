function download(cb){
    setTimeout(function(){
        console.log("Download complete");
        cb(upload);
    },2000)
}

function compress(cb){
    setTimeout(function(){
        console.log("After download,Now time to compress the file");
        cb();
    },2000)

}

function upload(){
    setTimeout(function(){
        console.log("Once compressed, now let's upload");
    },2000)
}

download(compress);