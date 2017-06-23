var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base;
(function (Base) {
    var Person = (function () {
        function Person(name, age) {
            this.age = age;
            this.name = name;
        }
        Person.prototype.presentYourself = function () {
            alert("Hi. my name is " + this.name + " I am " + this.age + " years old");
        };
        return Person;
    }());
    Base.Person = Person;
})(Base || (Base = {}));
var Inherited;
(function (Inherited) {
    var Student = (function (_super) {
        __extends(Student, _super);
        function Student(name, age, college) {
            var _this = _super.call(this, name, age) || this;
            _this.college = college;
            return _this;
        }
        Student.prototype.changeCollege = function (college) {
            this.college = college;
        };
        return Student;
    }(Base.Person));
    Inherited.Student = Student;
})(Inherited || (Inherited = {}));
var Student = Inherited.Student;
var student = new Student("Zack Huber", 29, "ASU");
var AbstractLogger = (function () {
    function AbstractLogger() {
        this.defaultText = "[none]";
    }
    return AbstractLogger;
}());
var BodyLogger = (function (_super) {
    __extends(BodyLogger, _super);
    function BodyLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BodyLogger.prototype.log = function (text) {
        var div = document.createElement("div");
        div.innerText = (text || this.defaultText);
        document.getElementsByTagName("body")[0].appendChild(div);
    };
    return BodyLogger;
}(AbstractLogger));
var AlertLogger = (function (_super) {
    __extends(AlertLogger, _super);
    function AlertLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlertLogger.prototype.log = function (text) {
        alert((text || this.defaultText));
    };
    return AlertLogger;
}(AbstractLogger));
var bodyLogger = new BodyLogger();
bodyLogger.log("yolo");
var logFunct = function (text, logger) {
    logger.log(text);
};
logFunct("stuff", bodyLogger);
//# sourceMappingURL=file.js.map