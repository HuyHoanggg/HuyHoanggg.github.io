//1. Đếm số nguyên tố trong đoạn [a, b].

function countNumber(a,b){
    for( var i=a; a<=i<=b; i++){
        if()
    }
}

//2. Hiển thị số ngày của tháng. Với tháng 2 có 29 ngày nếu là năm nhuận, 28 ngày nếu là năm không nhuận.

function dayCheck(month,year){
    if(month <= 0 || year <= 0){
        return `Vui lòng nhập số nguyên dương!`
    }else{
        function yearCheck(year){
        if ((year%4==0 && year % 100 !=0 || year % 400 == 0)){
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

function maxNumber()

//5. Chèn phần tử có giá trị X vào mảng sao cho mảng vẫn có thứ tự tăng dần.

function sortNumber(arr){

    return even.sort(function (a, b) { return b - a });
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
    if(h<=0){
        return `Chiều cao tam giác phải lớn hơn 0!`;
    }else{
        for(var i=1; i<=h; i++){
            for(var j=1; j<=h+1-i;j--){
                document.write("&ensp;");
            }
            for(var j=i; j<=2*i-1; j--){
                document.write("*");
            }
            document.write("<br/>");
        }
    }
}