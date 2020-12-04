//pass input for new list function?
function newItem() {
    var input = document.getElementById("newInput").value;
    addItem(input);
}

function addItem(input) {
    var item = document.createElement("li");
    var text = document.createTextNode(input);
    item.appendChild(text);
    if (input == "") {
        alert("Write something first!");
    } else {
        document.getElementById("itemUL").appendChild(item);
    }
    document.getElementById("newInput").value = "";
    addX(item);
}

function addX(item) {
    var close = document.createElement("span");
    var text = document.createTextNode("X");
    close.className = "X";
    close.appendChild(text);
    item.appendChild(close);
    xUpdate();
}

function xUpdate() {
    var X = document.getElementsByClassName("X");
        var i;
        for (i = 0; i < X.length; i++) {
            X[i].onclick = function() {
                var item = this.parentElement;
                item.remove();
            }
        }
}

function importWindow() {
    
}

function chooseEx() {
    var list = document.getElementById("exampleUL");
    var i;
    for (i = 0; i < list.length; i++) {
        list[i].onclick = function() {
            importList(list[i]);
            window.close();
        }
    }
}

function importList(example) {
    var i;
    for (i = 0; i < list.length; i++) {
        addItem(list[i]);
    }
}

function login() {

}

function save() {

}

//new button?
function load() {

}

//delete?
function clearList() {
    
}

