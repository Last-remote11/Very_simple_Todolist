var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var item = document.querySelectorAll("li");
var deleteButton = document.getElementsByClassName("delete");


function inputText() {
    var button = document.createElement("button");  //항목 생성 시 삭제버튼도 생성
    button.innerHTML = "삭제"
    button.onclick = removeParent;

    var li = document.createElement("li");
    li.appendChild(button)
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

//삭제버튼

function removeParent(event) {
    var target = event.target
    console.log(target)
    target.removeEventListener("click", removeParent);
    target.parentNode.remove();
}

for (var i=0; i<deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", removeParent
    );
}

// 항목 생성 시 버튼 추가

function lineThrough(event) {
    var a = event.target;
    if(count===0) {
        a.classList.add("done");
    } else {
        a.classlist.toggle("done");
    }
    count++;
}

ul.onclick = function(event) {
    var target = event.target;
    target.classList.toggle("done");
}

button.addEventListener("click", add_List_Click);

input.addEventListener("keypress", add_List_Keypress);

