document.writeln('Bài 1. Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại <br/>');
document.writeln('a. Chuyển từ độ C sang độ F: Công thức F=(C*1.8)+32 - Câu lệnh gọi hàm là convertCtoF() <br/>');
document.writeln('b. Chuyển từ độ F sang độ C: Công thức C= (F-32)/1.8 - Câu lệnh gọi hàm là convertFtoC() <br/>');
document.writeln('Bài 2. Viết function tính thế kỷ của 1 năm. Biết thế kỉ thứ nhất tính từ năm 1 đến 100 <br/>');
document.writeln('Câu lệnh gọi hàm là centuryCount() <br/>');
document.writeln(`Bài 3. Nhập 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đàu tiên và thêm "..." ở cuối chuỗi <br/>`);
document.writeln('Câu lệnh gọi hàm là catChuoi() <br/>');
document.writeln('Bài 4. Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên. <br/>');
document.writeln('Câu lệnh gọi hàm là capFirstCharacter()')

function convertCtoF(a){
    console.log(`${a} \xB0C = ${(a * 1.8) + 32} \xB0F`);
}

function convertFtoC(b){
    console.log(`${b} \xB0F = ${(b-32)/1.8} \xB0C`); 
}

function centuryCount(c){
    console.log(`Năm ${Math.abs(c)} thuộc thế kỉ ${Math.ceil(Math.abs(c/100))}`);
}

// function bai3(d){
//     if (typeof(d) == "string"){
//         var res = d.slice(0,9);
//         console.log(`Kết quả của chuỗi ${d} sau khi bị cắt là ${res}...`);
//     }else{
//         var e = d.toString();
//         var res = e.slice(0,9);
//         console.log(`Kết quả của chuỗi ${d} sau khi bị cắt là ${res}...`);
//     } 
// }

function catChuoi(x) {
    let y;
    if (typeof x == "string") {
      y = x;
    } else {
      y = x.toString();
    }
    return y.substring(0, 10) + "...";
  }

// function upperFirst(string) {   
//     return`${string} sau khi viết hoa chữ cái đầu sẽ là ${string.charAt(0).toUpperCase() + string.toLowerCase().slice(1)}`;
// }
   
function capFirstCharacter(a){
    let b = a.toString().split(" ");
    for (let i = 0; i < b.length; i++){
        b[i] = b[i].toLowerCase();
        b[i] = b[i].charAt(0).toUpperCase()+b[i].slice(1);
    }
    return b.join(" ");
}