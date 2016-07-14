define(['./dep1', './dep2'], function(dep1, dep2) {
    var result = dep1.getPublic + dep2.getPublic;
    document.getElementById('result').innerHTML = result;
})
