let lib1 = require('./lib1');

console.log("Runnning lib2");
let b = 10;

module.exports.b = b
module.exports.lib1 = lib1