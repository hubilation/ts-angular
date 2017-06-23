module Base {
    export class Person {
        name: string;
        age: number;
        presentYourself(): void {
            alert(`Hi. my name is ${this.name} I am ${this.age} years old`);
        }
        constructor(name: string, age: number) {
            this.age = age;
            this.name = name;
        }
    }
}

module Inherited {
    export class Student extends Base.Person{
        college: string;
        constructor(name: string, age: number, college: string) {
            super(name, age);
            this.college = college;
        }

        changeCollege(college: string) {
            this.college = college;
        }
    }
}

import Student = Inherited.Student;
var student = new Student("Zack Huber", 29, "ASU");
//alert(JSON.stringify(student));

interface ILogger {
    log(text?: string): void;
    defaultText: string;
}

abstract class AbstractLogger implements ILogger {
    abstract log(text?: string): void;
    defaultText: string;
    constructor() {
        this.defaultText = "[none]";
    }
}

class BodyLogger extends AbstractLogger {
    log(text?: string): void {
        var div = document.createElement("div");
        div.innerText = (text || this.defaultText);
        document.getElementsByTagName("body")[0].appendChild(div);
    }
}

class AlertLogger extends AbstractLogger {
    log(text?: string): void {
        alert((text || this.defaultText));
    }
}

var bodyLogger = new BodyLogger();
bodyLogger.log("yolo");

var logFunct = (text: string, logger: ILogger) => {
    logger.log(text);
}

logFunct("stuff", bodyLogger);