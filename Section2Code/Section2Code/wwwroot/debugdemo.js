var Clickable = (function () {
    function Clickable() {
    }
    Clickable.prototype.clicked = function (ev) {
        alert("You clicked a button");
    };
    Clickable.prototype.createButton = function () {
        var button = document.createElement("button");
        button.innerHTML = "Click me";
        button.onclick = this.clicked;
        document.getElementsByTagName("body")[0].appendChild(button);
    };
    return Clickable;
}());
var c = new Clickable();
c.createButton();
//# sourceMappingURL=debugdemo.js.map