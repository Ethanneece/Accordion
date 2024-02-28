const buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = buttonClick(id);
}

function buttonClick(id) {

    console.log(id);
    
    let p = document.getElementById("dropDownP" + id);
    if (p.classList.contains("hide")) {
        p.classList.remove("hide");
    }
    else {
        p.classList.add("hide");
    }

    let button = document.getElementById(id); 
    if (button.classList.contains("plus")) {
        button.classList.remove("plus");
        button.classList.add("minus");
    }
    else {
        button.classList.remove("minus");
        button.classList.add("plus");
    }
}