//pass input for new list function?
var loginStatus = false;

document.getElementById("itemUL").addEventListener("click", function(ev) {
    if (ev.target.tagName == "LI") {
        ev.target.classList.toggle("done");
    }
});
document.getElementById("newInput").addEventListener("keyup", function(ev) {
    if (ev.key == "Enter") {
        newItem();
    }
});

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

function getRequest(choice) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            data = JSON.parse(this.responseText);
            for(var i = 0; i < data.list.length; i++) {
                var obj = data.list[i];
                addItem(obj.item);
            }
        }
    }
    xhttp.open("GET", "https://kskulski-taskmaster.azurewebsites.net:3000/examples" + choice.toString());
    //http://www.azure.kskulski-taskmaster.net:3000/examples/
    xhttp.send(); 
}

function exampleForm() {
    var form = document.getElementById("exForm");
    if (form.style.display == "initial") {
        form.style.display = "none";
    } else {
        form.style.display = "initial";
    }
}

function importExample() {
    clearList();
    const options = document.querySelectorAll("input[name=examples]");
    let choice;
        for (const op of options) {
            if (op.checked) {
                choice = op.value;
                break;
            }
        }
    getRequest(choice);
    document.getElementById("exForm").style.display = "none";
}

function login() {

}

function save() {
    if (loginStatus === false) {
        alert("Please login first to save your list!");
    }
}

//new button?
function load() {
    if (loginStatus == false) {
        alert("Please login to choose which list to load.");
    }
}

//add button
function clearList() {
    var list = document.getElementById("itemUL");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}


