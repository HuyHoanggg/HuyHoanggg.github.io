function convertCtoF(a){
    document.writeln('Bài 1. Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại <br/>');
    document.writeln('a. Chuyển từ độ C sang độ F: Công thức F=(C*1.8)+32 <br/>');
    document.writeln(`${a} độ C = ${(a * 1.8) + 32} độ F <br/>`);
}

function convertFtoC(b){
    document.writeln('Bài 1. Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại <br/>');
    document.writeln('b. Chuyển từ độ F sang độ C: Công thức C= (F-32)/1.8 <br/>');
    document.writeln(`${b} độ F = ${(b-32)/1.8} độ C <br/>`); 
}

function centuryCount(c){
    document.writeln('Bài 2. Viết function tính thế kỷ của 1 năm. Biết thế kỉ thứ nhất tính từ năm 1 đến 100 <br/>');
    document.writeln(`Năm ${Math.abs(c)} thuộc thế kỉ ${Math.ceil(Math.abs(c)/100)} <br/>`);
}

function bai3(){
    var str = "13424512341234";
    document.writeln(`Bài 3. Nhập 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đàu tiên và thêm "..." ở cuối chuỗi <br/>`);
    document.writeln(`Kết quả của chuỗi ${str} sau khi bị cắt là ${str.slice(0,10)}...`)
}