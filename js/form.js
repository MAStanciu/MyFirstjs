function $(selector){
    return document.querySelector(selector);
}

$("#btn").addEventListener("click", function(){
    var input = document.createElement("input");
    input.setAttribute("type", "email");
    input.setAttribute("placeholder", "E-mail");
    input.setAttribute("name", "emails");
    $("#form").appendChild(input);
    myAlert("Add new email input ");
})

function myAlert(msg) {
    console.log($("body").children[1]);
    var div = document.createElement("div");
    div.classList.add("alert");
    div.innerHTML = msg;
    var close = document.createElement("span");
    close.style.float = "right";
    close.style.color = "red";
    close.style.backgroundColor = "black";
    close.classList.add("close");
    close.innerHTML = "X";
    div.appendChild(close);
    $("body").insertBefore(div, $("body").firstChild);
    bind_close();
}

function bind_close(){
    let elements = document.querySelectorAll(".close");
    for(var i=elements.length-1;i>=0;i--){
        let el = elements[i];
        el.addEventListener("click",function(){
            this.parentNode.style.display = "none";
        });
    }
}