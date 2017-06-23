class Clickable {

    clicked(ev: MouseEvent) {
        alert("You clicked a button");
    }

    createButton(): void {
        var button = document.createElement("button");
        button.innerHTML = "Click me";
        button.onclick = this.clicked;
        document.getElementsByTagName("body")[0].appendChild(button);
    }
}

var c = new Clickable();
c.createButton();