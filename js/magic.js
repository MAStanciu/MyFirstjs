function myFirstFunction(){
    console.log("Thanks you for click");
    
    var div = document.getElementById("my_div");
    div.classList.add("my_class");
    console.log(div);

    var div = document.getElementsByTagName("div");
    console.log(div);

    var second_div = document.querySelector("#my_second_div");
    console.log(second_div);

    console.log($("#my_third_div"));
}

function mySecondFunction(){
    console.log("Holaaa");
}

function $(selector){
    return document.querySelectorAll(selector);

}