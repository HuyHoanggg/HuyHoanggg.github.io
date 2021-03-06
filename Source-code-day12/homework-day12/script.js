document.write('Bài 1. Cho một mảng số nguyên. Viết hàm kiểm tra nếu trong mảng có phần tử âm thì thay thế nó bằng 0. <br/>');
document.write('Câu lệnh để gọi hàm là checkNumber() <br/>');
document.write('Bài 2. Viết hàm tìm số nhỏ nhất và lớn nhất trong mảng số nguyên. <br/>');
document.write('Câu lệnh để gọi hàm là minMax() <br/>');
document.write('Viết hàm trả về vị trí đầu tiên của số lẻ, vị trí cuối cùng của số chẵn trong mảng bất kì.<br/>')
document.write('Câu lệnh để gọi hàm là oddEven() <br/>');


// function checkNumber(oldArr){
//     const newArr = oldArr.map(x => (x<0) == 0);
//     console.log(newArr);
// }

function checkNumber(arr){
    for(let i=0; i< arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return `${arr}`;
}   

function minMax(numbers){
    const minNumber = Math.min.apply(null, numbers);
    const maxNumber = Math.max.apply(null, numbers);
    return `Số lớn nhất là ${maxNumber} và số nhỏ nhất là ${minNumber}`;
}

function oddEven(x){
    let even = x.filter(number => (number % 2) == 0 );
    let odd = x.filter(number => (number % 2) != 0 );
    return `Số Lẻ đầu tiên là ${odd[0]} và số Chẵn cuối cùng là ${even[even.length-1]}`;
}