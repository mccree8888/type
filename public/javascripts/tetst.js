var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
        this.ints = "wwww";
    }
    Greeter.prototype.greet = function () {
        return "<h1>" + this.ints + "</h1>";
    };
    return Greeter;
}());
;
var greeter = new Greeter("Hello, world!");
document.getElementById("wow").innerHTML = greeter.greet();
