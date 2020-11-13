function changeColor(){
    document.getElementById("para1").style.color = "blue";
    document.getElementById("para2").style.color = "yellow";
    document.getElementById("para3").style.color = "red";
}

function changeBgColor(color){
    document.getElementById("container").style.backgroundColor = color;
}

function copyContent(paragraph1,paragraph2){
    let p1 = document.getElementById(paragraph1)
    let p2 = document.getElementById(paragraph2)
    p1.innerHTML = p2.innerHTML
}

function changeFontSize(x){
    if(x<=0){
        return "Please enter a positive integer!";
    }else{
        document.getElementById("container").style.fontSize = x + "px";
    }
}

function increaseFontSize(paragraph){
    let p3 = document.getElementById(paragraph);
    if (p3.style.fontSize < "30px") {
        let style = window.getComputedStyle(p3, null).getPropertyValue("font-size");
        currentSize = parseFloat(style);
        p3.style.fontSize = currentSize + 1 + "px";
    }else{
        return "Kích thước tăng lên không được quá 30px";
    }    
}

function decreaseFontSize(paragraph){
    let p4 = document.getElementById(paragraph);
    if (p4.style.fontSize > "10px") {
        let style = window.getComputedStyle(p4, null).getPropertyValue("font-size");
        currentSize = parseFloat(style);
        p4.style.fontSize = currentSize - 1 + "px";
    }else{
        return "Kích thước giảm xuống không được nhỏ quá 10px";
    }
}