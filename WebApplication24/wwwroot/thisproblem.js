var Person = (function () {
    function Person(name) {
        var _this = this;
        this.name = name;
        this.sayHiArrowFunction = function (event) {
            alert("Hello from " + _this.name);
        };
        var self = this;
        this.sayHiArrowFunctionSignatureOnly = function (event) {
            alert("Hello from " + _this.name);
        };
    }
    Person.prototype.sayHi = function (event) {
        alert("Hello from " + this.name);
    };
    Person.prototype.writeUpButton = function () {
        var button = document.createElement("button");
        button.innerHTML = "Say Hello";
        button.onclick = this.sayHiArrowFunctionSignatureOnly;
        document.getElementsByTagName("body")[0].appendChild(button);
    };
    return Person;
}());
var p = new Person("Zack");
p.writeUpButton();
//# sourceMappingURL=thisproblem.js.map