//Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F, tham số truyền vào là 1 số nguyên biểu thị độ C.

function convertCtoF(a) {
    return `${a}\xB0C = ${(a * 1.8) + 32}\xB0F`
}

//Bài 2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.

function findNumber(number) {
    number.sort(function (a, b) { return b - a });
    return number[1];
}

//Bài 3: Cho 1 mảng các chuỗi bất kỳ có độ dài khác nhau. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất. 

function maxLength(arr) {
    let max = arr[0].length; //Độ dài của phần tử đầu tiên trong mảng
    let maxString = arr[0];
    for (let i = 1; i < arr.length; i++) { // Chạy từ i = 1 để tối ưu, vì đã gán max = 0 (độ dài của phần tử đầu tiên)
        if (max < arr[i].length) {
            max = arr[i].length;
            maxString = arr[i];
        }
    }
    return maxString;
}

function maxLength1(arr) {
    arr.sort(function (a, b) { return b.length - a.length });
    return arr[0];
}
// //Bài 4: Viết hàm có 2 tham số là 2 chuỗi string và target khác rỗng, dùng để kiểm tra chuỗi string có kết
// thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.

function checkEnding(string, ending) {
    let end = string.endsWith(ending);
    return end;
}

//Bài 5: Cho 1 mảng chỉ chứa các phần tử có kiểu dữ liệu number, string và boolean. Hãy kiểm tra xem
// trong mảng đó có phần tử nào bị lặp lại hay không (xuất hiện 2 lần trở lên). Kết quả trả về true (nếu lặp) hoặc false (nếu không lặp).

function checkElement(arr) {
    let check = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                check = true;
                break;
            }
        }
    }
    return check;
}

//Dùng 2 vòng lặp lồng nhau để so sánh từng phần tử với nhau