//class Person {
//    static createdInstances: number = 0;

//    constructor() {
//        Person.createdInstances++;
//    }
//}

//var p1 = new Person();
//var p2 = new Person();

//alert(Person.createdInstances);

module Utilities {
    export class Logger {
        static handleError(error: Error) {
            console.log(error);
        }
    }

    export class Runner {
        static runWithExceptionHandling(func: Function) {
            try {
                func();
            }
            catch (e) {
                Utilities.Logger.handleError(e);
            }
        }
        constructor() {
            throw new Error("Static class, not instanceable")
        }
    }
}

var func = function () {
    alert((<any>window).something.somethingelse);
}

Utilities.Runner.runWithExceptionHandling(func);
