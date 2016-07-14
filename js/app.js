var dep1 = require('./dep1.js')
var dep2 = require('./dep2.js')
    
var result = dep1.getPublic + dep2.getPublic;
document.getElementById('result').innerHTML = result;
