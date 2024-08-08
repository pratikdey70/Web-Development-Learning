let lib1 = require('./lib2');

console.log("Runnning lib2");
let b = 10;

module.exports = {
    b,
    lib1
}