//function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.

function changeColor(){
    document.getElementById("para1").style.color = "blue";
    document.getElementById("para2").style.color = "yellow";
    document.getElementById("para3").style.color = "red";
}

//function changeBgColor(color): Thay đổi màu nền của trang thành màu color.

function changeBgColor(color){
    document.getElementById("container").style.backgroundColor = color;
}

//function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 thành giống nội
//  dung của đoạn văn paragraph2 (tham số truyền vào là id của 2 đoạn văn hoặc thứ tự của đoạn văn).

function copyContent(paragraph1,paragraph2){
    let p1 = document.getElementById(paragraph1);
    let p2 = document.getElementById(paragraph2);
    p1.innerHTML = p2.innerHTML;
}

//function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).

function changeFontSize(x){
        document.getElementById("container").style.fontSize = x + "px"
}

//function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn (tham số truyền vào 
// là id đoạn văn hoặc thứ tự đoạn văn) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được 
// vượt quá 30 pixels 

function increaseFontSize(paragraph){
    let p3 = document.getElementById(paragraph);
    if (p3.style.fontSize < 30) {
        let style = window.getComputedStyle(p3).getPropertyValue("font-size");
        currentSize = parseFloat(style);
        p3.style.fontSize = currentSize + 1 + "px";
    }else{
        alert ("Kích thước tăng lên không được quá 30px");
    }    
}

//function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn (tham số truyền vào 
// là id đoạn văn hoặc thứ tự đoạn văn) xuống 1 pixels so với kích thước hiện tại, kích thước giảm xuống không 
// vượt quá 10 pixels.

function decreaseFontSize(paragraph){
    let p4 = document.getElementById(paragraph);
    if (p4.style.fontSize > "10px") {
        let style = window.getComputedStyle(p4).getPropertyValue("font-size");
        currentSize = parseFloat(style);
        p4.style.fontSize = currentSize - 1 + "px";
    }else{
        alert ("Kích thước giảm xuống không được nhỏ quá 10px");
    }
}

function bai5(arr){
    for( let i =0; i<arr.length;i++){
        for (let j=i+1;j<arr.length;j++){
            console.log(arr[i],arr[j]);
        }
    }
}