class Greeter {
    constructor(public greeting: string) { }
    ints: string = "wwww";
    greet() {
        return "<h1>" + this.ints + "</h1>";
    }
};

var greeter = new Greeter("Hello, world!");

document.getElementById("wow").innerHTML = greeter.greet();
