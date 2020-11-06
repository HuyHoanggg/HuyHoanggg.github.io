document.write("1. Đếm số nguyên tố trong đoạn [a, b]. Câu lệnh gọi hàm: countSoNT(a,b)<br/>");
document.write("2. Hiển thị số ngày của tháng. Với tháng 2 có 29 ngày nếu là năm nhuận, 28 ngày nếu là năm không nhuận. Câu lệnh gọi hàm: dayCheck(month,year)<br/>");
document.write("4. Chèn phần tử có giá trị X vào phía sau phần tử có giá trị lớn nhất trong mảng. Câu lệnh gọi hàm: importNumber(arr, x)<br/>");
document.write("5. Chèn phần tử có giá trị X vào mảng sao cho mảng vẫn có thứ tự tăng dần. Câu lệnh gọi hàm: sortArr(arr, x)<br/>");
document.write("6. Tính tổng các chữ số trong 1 số nguyên dương. Câu lệnh gọi hàm: sumNumber(number) <br/>");
document.write("7. Kiểm tra tính đối xứng của một số nguyên. Câu lệnh gọi hàm: checkDoiXung(a)<br/>");
document.write("8. Giải phương trình bậc 2: ax^2 + bx + c = 0. Câu lệnh gọi hàm: ptBacHai(a,b,c)<br/>");
document.write("9. Vẽ hình chữ nhật rỗng kích thước m, n. Câu lệnh gọi hàm: retangle(m,n) <br/>");
document.write("10.  Vẽ tam giác vuông chiều cao h. Câu lệnh gọi hàm: triangle(h)<br/>");
document.write("11. Vẽ tam giác cân ngược. Câu lệnh gọi hàm: tamGiacNguoc(h)<br/>");
document.write("12. Viết chương trình vẽ một chữ X bằng các dấu * với chiều cao nhập từ bàn phím. Câu lệnh gọi hàm: drawX(h)")

//1. Đếm số nguyên tố trong đoạn [a, b].

function checkSoNT(number){
    if(number < 2){
        return false;
    } 
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i == 0){
            return false;
        } 
    }
    return true;
}

function countSoNT(a,b) {
    let count = 0;
    let list = [];
    for (let i = a; i <= b; i++) {
        if(checkSoNT(i)){
            count++;
            list.push(i);
        }
    }
    return list;
}

//2. Hiển thị số ngày của tháng. Với tháng 2 có 29 ngày nếu là năm nhuận, 28 ngày nếu là năm không nhuận.

function dayCheck(month,year){
    if(month <= 0 || year <= 0){
        return `Vui lòng nhập số nguyên dương!`
    }else{
        function yearCheck(year){
        if (((year%4)==0 && (year % 100) !=0) || (year % 400) == 0){
            return true;
        }else{
            return false;
        }
    }
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return `31`;
        case 4:
        case 6:
        case 9:
        case 11:
            return `30`;
        case 2:
            if (yearCheck(year) == true){
                return `29`;
            }else{
                return `28`;
            }
        }
    }
}

//4. Chèn phần tử có giá trị X vào phía sau phần tử có giá trị lớn nhất trong mảng.

function importNumber(arr,x){
    let max = [0];
    // find max
    for(let i = 0; i <= arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    // get index of element in array
    let index = arr.indexOf(max);
    // push x
    arr.splice(index + 1 , 0, x);
    return arr;
}

//5. Chèn phần tử có giá trị X vào mảng sao cho mảng vẫn có thứ tự tăng dần.

function sortArr(arr,x){
    arr.push(x);
    for(let i = 0; i <= arr.length; i++){
        for(let j = 0; j <= arr.length; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}

//6. Tính tổng các chữ số trong 1 số nguyên dương.

function sumNumber(number){
    var sum = 0;
    for(;number!=0;){
        element = Math.floor(number % 10);
        sum += element;
        number /= 10;
    }
    return `${sum}`;
}

//7. Kiểm tra tính đối xứng của một số nguyên.

function checkDoiXung(a){
    let reverse = 0;
    let rem;
    let temp = a;
    while(temp != 0){
        rem = Math.floor(temp % 10);
        reverse = Math.floor((reverse * 10) + rem);
        temp = Math.floor(temp/10);
    }
    if(reverse == a){
        return `${a} là số đối xứng`;
    }else{
        return `${a} không phải là số đối xứng`;
    }
}

//8. Giải phương trình bậc 2: ax^2 + bx + c = 0.

function ptBacHai(a,b,c){
    var delta = b*b - 4*a*c;
    if(delta < 0){
        document.write("Phương trình vô nghiệm!<br/>");
    }else if (delta == 0){
        var x = -b/(2*a);
        document.write("Phương trình có 1 nghiệm duy nhất là: "+x+"<br/>");
    }else{
        var x1= (-b + Math.sqrt(delta))/(2*a);
        var x2= (-b - Math.sqrt(delta))/(2*a);
        document.write("Phương trình có 2 nghiệm là: x1 = "+ x1 +"<br/>");
        document.write("x2 = "+x2+"<br/>");
    }
}

//9. Vẽ hình chữ nhật rỗng kích thước m, n

function rectangle(m,n){
    if(m<=0 || n<=0){
        return `Chiều dài và chiều rộng phải lớn hơn 0`
    }else{
        for(var i=0; i<m; i++){
            for(var j=0; j<n; j++){
                if(i==0 || j==0 || i== m-1|| j==n-1){
                    document.write("*");
                }else{
                    document.write("&ensp;");
                }
            }
            document.write("<br/>");
        }
    }
}

//10.  Vẽ tam giác vuông chiều cao h

function triangle(h){
    if(h<=0){
        return `Chiều cao tam giác phải lớn hơn 0!`
    }else{
        for(var i=1; i<=h; i++){
            for (var j=1; j<=i; j++){
                document.write("*");
            }
            document.write("<br/>");
        }
    }
}

//11. Vẽ tam giác cân ngược

function tamGiacNguoc(h){
    if(h<=1){
        return `Chiều cao tam giác phải lớn hơn 1!`;
    }else{
        for(var i=1; i<=h; i++){
            for(var j=1; j<=2*h-1; j++){
                if(i==1){
                    document.write("*");
                }else if((j<i) || (j>2*h-i)){
                    document.write("&ensp;");
                }else{
                    document.write("*");
                }
            }
            document.write("<br/>");
        }
    }
}

//12. Viết chương trình vẽ một chữ X bằng các dấu * với chiều cao nhập từ bàn phím (chiều cao lớn hơn 0 và là số lẻ)

function drawX(h){
    if(h<=0){
        return `Chiều cao phải lớn hơn 0!`;
    }else if(h%2==0){
        return `Chiều cao phải là số lẻ`;
    }else{
        for(let i=1; i<=h; i++){
            for(let j=1;j<=h;j++){
                if(j==i || j==h+1-i){
                    document.write("*");
                }else{
                    document.write("&ensp;");
                }
            }
            document.writeln("<br/>");
        }
    }
}