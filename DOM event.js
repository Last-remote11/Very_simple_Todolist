var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputText() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function checkLength() {
    return input.value.length;
}

function add_List_Click() {
    if (checkLength() > 0) {
        inputText();
    }
}

function add_List_Keypress(event) {
    if (checkLength() > 0 && event.key === '13') {
        inputText();
    }
}

button.addEventListener("click", add_List_Click)

input.addEventListener("keypress", add_List_Keypress)
