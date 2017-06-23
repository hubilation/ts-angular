class Person {
    sayHi(event: MouseEvent) {
        alert(`Hello from ${this.name}`);
    }

    sayHiArrowFunction = (event: MouseEvent) => {
        alert(`Hello from ${this.name}`);
    }

    sayHiArrowFunctionSignatureOnly: (event: MouseEvent) => void;

    constructor(public name: string) {
        var self = this;
        this.sayHiArrowFunctionSignatureOnly = (event: MouseEvent) => {
            alert(`Hello from ${this.name}`);
        }
    }

    writeUpButton(): void {
        var button = document.createElement("button");
        button.innerHTML = "Say Hello";
        button.onclick = this.sayHiArrowFunctionSignatureOnly;
        document.getElementsByTagName("body")[0].appendChild(button);
    }
}

var p = new Person("Zack");
p.writeUpButton();