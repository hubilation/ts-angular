//class Person {
//    static createdInstances: number = 0;
//    constructor() {
//        Person.createdInstances++;
//    }
//}
//var p1 = new Person();
//var p2 = new Person();
//alert(Person.createdInstances);
var Utilities;
(function (Utilities) {
    var Logger = (function () {
        function Logger() {
        }
        Logger.handleError = function (error) {
            console.log(error);
        };
        return Logger;
    }());
    Utilities.Logger = Logger;
    var Runner = (function () {
        function Runner() {
            throw new Error("Static class, not instanceable");
        }
        Runner.runWithExceptionHandling = function (func) {
            try {
                func();
            }
            catch (e) {
                Utilities.Logger.handleError(e);
            }
        };
        return Runner;
    }());
    Utilities.Runner = Runner;
})(Utilities || (Utilities = {}));
var func = function () {
    alert(window.something.somethingelse);
};
Utilities.Runner.runWithExceptionHandling(func);
//# sourceMappingURL=static.js.map