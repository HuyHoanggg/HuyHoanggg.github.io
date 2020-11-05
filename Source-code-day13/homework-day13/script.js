document.write("1. Viết hàm kiểm tra 2 số, trả về số lớn hơn. Câu lệnh gọi hàm: maxNumber(a,b) <br/>");
document.write("2. Viết hàm tính n! (giai thừa) với n là số nguyên dương. Câu lệnh gọi hàm: giaiThua(a)<br/>");
document.write("3. Viết hàm lấy ra một mảng các số chẵn từ mảng ban đầu và trả về mảng đã được sắp xếp giảm dần. Câu lệnh gọi hàm: sortArr(c)<br/>");
document.write("4. Viết hàm lấy ra ngày tháng năm hiện tại, xác định đang là mùa nào trong năm. Câu lệnh gọi hàm: getSeason() <br/>");
document.write("5. Cho một mảng các chuỗi, viết hàm sắp xếp mảng theo thứ thự bảng chữ cái. Câu lệnh gọi hàm: alphabet(string) <br/>");
document.write("6. Viết hàm đảo ngược một chuỗi từ một chuỗi cho trước. Câu lệnh gọi hàm: reverse(oldString) <br/>");
document.write("7. Cho một số nguyên dương N, viết hàm kiểm tra N có phải là số nguyên tố. Câu lệnh gọi hàm: kiemtrasnt(n) <br/>");
document.write("8. Cho một số nguyên dương N, viết hàm in ra màn hình những số hoàn hảo nhỏ hơn N. Câu lệnh gọi hàm: perfectNumber(n) <br/>");
document.write("9. Viết chương trình vẽ một hình chữ nhật bằng các dấu * với chiều rộng và chiều cao cho trước. Câu lệnh gọi hàm: rectangle(a,b) <br/>");
document.write("10. Viết chương trình vẽ một tam giác cân bằng các dấu * với chiều cao cho trước (chiều cao lớn hơn 1). Câu lệnh gọi hàm: triangle(a)<br/>");

//1. Viết hàm kiểm tra 2 số, trả về số lớn hơn.

function maxNumber(a, b) {
    if (a > b) {
        return `${a}`;
    } else {
        return `${b}`;
    }
}

//2. Viết hàm tính n! (giai thừa) với n là số nguyên dương.

function giaiThua(a) {
    if (a < 0) {
        return `Giá trị không tồn tại`;
    } else if (a == 0) {
        return `1`;
    } else {
        ketQua = 1;
        for (i = 1; i <= a; i++) {
            ketQua = ketQua * i;
        }
        return `${ketQua}`;
    }
}

//3. Viết hàm lấy ra một mảng các số chẵn từ mảng ban đầu và trả về mảng đã được sắp xếp giảm dần.

// function sortArr(c) {
//     let even = c.filter(x => (x % 2) == 0);
//     return even.sort(function (a, b) { return b - a });
// }

function sortArr(c){
    let evenNumber = c.filter((number)=> number%2 == 0);
    let soChan = evenNumber[0];
    for (let i = 0; i < evenNumber.length-1; i++){
        for (let j = i+ 1; j < evenNumber.length; j++){
            if (evenNumber[i] < evenNumber[j]){
                soChan = evenNumber[j];
                evenNumber[j] = evenNumber[i];
                evenNumber[i] = soChan;
            }
        }
    } return evenNumber;
}

// 4. Viết hàm lấy ra ngày tháng năm hiện tại, xác định đang là mùa nào trong năm. Biết rằng:

// - Mùa xuân từ tháng 1 đến tháng 3

// - Mùa hè từ tháng 4 đến tháng 6

// - Mùa thu từ tháng 7 đến tháng 9

// - Mùa đông từ tháng 10 đến tháng 12

function getSeason() {
    switch (new Date().getMonth()) {
        case 0:
        case 1:
        case 2:
            season = "Xuân";
            break;
        case 3:
        case 4:
        case 5:
            season = "Hạ";
            break;
        case 6:
        case 7:
        case 8:
            season = "Thu";
            break;
        case 9:
        case 10:
        case 11:
            season = "Đông"
    }
    return `hôm nay là ngày ${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}  và đang là mùa ${season}`
}

//5. Cho một mảng các chuỗi, viết hàm sắp xếp mảng theo thứ thự bảng chữ cái.

function alphabet(string) {
    string.sort();
    return `${string}`;
}

//6. Viết hàm đảo ngược một chuỗi từ một chuỗi cho trước.

function reverse(oldString) {
    var newString = "";
    for (var i = oldString.length - 1; i >= 0; i--) {
        newString += oldString[i];
    }
    return newString;
}

//7. Cho một số nguyên dương N, viết hàm kiểm tra N có phải là số nguyên tố.

// function checkNumber(n) {
//     if (n < 2) {
//         return `${n} không phải là số nguyên tố`;
//     }else if (n == 2||n == 3){
//         return `${n} là số nguyên tố`
//     }else {
//         for (var i = 2; i <= (n/2); i++) {
//             if (n % i == 0) {
//                 // console.log (`${n} không phải là số nguyên tố`);
//                 return false;
//             }else{
//                 console.log (`${n} là số nguyên tố`);
//             } 
//         }
//     }
// }

function kiemtrasnt(n)
{   
    var flag = false;
    if (n < 2 ){
        flag = false;
    }
    else if (n == 2 || n == 3){
        flag = true;
    }
    else{
        
        for (var i = 2; i <= (n /2); i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
            else {flag = true}
        }
    }
    if (flag == true){
        return n + " là số nguyên tố";
       
    }
    else{
        return n + " không phải là số nguyên tố ";
    }
}


//8. Cho một số nguyên dương N, viết hàm in ra màn hình những số hoàn hảo nhỏ hơn N (số hoàn hảo là số bằng tổng các ước số của nó mà không kể chính nó).

function perfectNumber(n){
    let list = [];
    if (n<=0){
        return `Vui lòng nhập số nguyên dương`;
    }else{
        for (i=2; i<=n; i++){
            sum= 1;
            for(j=2; j<=i/2; j++){
                if(i%j==0){
                    sum += j;
                }
            }
            if(sum == i){
                list.push(i);
            }
        }
    }
    return list;
}

//9. Viết chương trình vẽ một hình chữ nhật bằng các dấu * với chiều rộng và chiều cao cho trước (chiều rộng, chiều cao lớn hơn 1).

function rectangle(a,b){
    if (a<=0 || b<=0){
        return `Chiều rộng và chiều cao phải lớn hơn 0`;
    }else{
        for (var i=1; i<=b; i++){
            for(var j=1; j<=a; j++){
                document.write("*");
            }
            document.write('<br/>');
        }
    }
}

//10. Viết chương trình vẽ một tam giác cân bằng các dấu * với chiều cao cho trước (chiều cao lớn hơn 1).

function triangle(a){
    if (a<=1){
        return `Chiều cao tam giác phải lớn hơn 1`;
    }else{
        for(var i=1; i<=a; i++){
            for(var j=1; j<=a+1-i; j++){
                document.write("&ensp;");
            }
            for(var j=1; j<=2*i-1; j++){
                document.write("*");
            }
            document.write("<br/>");
        }
    }
}

// function triangle(h){
//     y = 2*h-1;
//     for (let i=0; i<h;i++){
//         for (let j=0; j<y;j++){
//             if(i<=j && j >= y-i-1){
//                 document.write("*");
//             }else{
//                 document.write("&nbsp;");
//             }
//         }
//         document.write("<br/>");
//     }
// }

// function tamGiacCan(h) {
//     var str = "";
//     for (let i = 0; i < h; i++) {
//       for (let j = 0; j < 2 * h-1; j++) {
//         if (j >= h - 1 - i && j <= h - 1 + i) {
//           str += "*";
//         } else {
//           str += "0";
//         }
//       }
//       str += "<br />";
//     }
  
//     document.writeln(str);
//   }