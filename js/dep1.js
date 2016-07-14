var dep1 = function() {
    var private1 = "private member of dep1";
    var public1 = "public member of dep1";

    return {
        getPublic: public1
    }
}();