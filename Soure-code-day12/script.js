function learnObject() {
    //Khai báo thuộc tính và giá trị của nó 
    let person1 = {
        name: "Huy Hoang",
        age: 25,
        run: () => { console.log('run') },
    };

    var person2 = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };

    for (const key in person2) {
        console.log(person2[key])
    }

    person1["address"] = "Viet Nam" //Thêm giá trị thuộc tính cho object

    const student = {
        firstName: 'Tèo',
        lastName: 'Nguyễn',
        age: 20
    };

    for (const key in student) {
        console.log(student[key])
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7];
let names = ["Quynh", "Viet", "Linh", "Hieu"];
let checks = [true, true, false, true, false, false]

// truy cập phần tử theo mảng index
numbers[3];

console.log(numbers.length);
console.log(names.length);
console.log(checks.length);

numbers.push(8); //Thêm giá trị vào array
numbers.push(9);

numbers.pop(); //Xóa giá trị cuối trong array

names.unshift('Hoa'); //Thêm giá trị Hoa vào object 'names' (at the beginning)
names.shift(); //Xóa giá trị đầu tiên trong array

console.log("Index of values 'Linh'", names.indexOf('Linh'));

for (let index = 0; index < names.length; index++) {
    console.log(name[index]);
}

for (let item of checks) {
    console.log(item)
}

//Viết hàm truyền vào một mảng các số và tính ra tổng các số đó.
function tinhTong(arrs) {
    let tong = 0;

    for (let i of arrs) {
        tong = tong + i;
    }

    return tong;
}

//Viết hàm truyền vào một mảng các số và tính ra tổng bình phương các số đó.
function tinhBinhPhuong(test) {
    let x = 0;

    for (let i of test) {
        x = x + (i ** 2);
    }
    return x;
}

//Cho một mảng các số nguyên bất kỳ, dùng phương thức map() tạo ra một mảng mới với các số là số dư tương ứng khi chia các số trong mảng cũ cho 2.
function bai3(oldArr){
    const newArr = oldArr.map((y) => y%2);
    console.log(newArr);
}

// Dùng phương thức filter() lọc ra các số chẵn trong một mảng nhiều số bất kỳ.

function bai4(number){
    const evenNumber = number.filter(z => z%2==0);
    console.log(evenNumber);
}

// Cho một mảng các chuỗi là tên các học viên. Viết hàm lọc ra những học viên có tên bắt đầu bằng chữ H (không phân biệt hoa thường)
function bai5(namee){
    const hName = namee.filter(a => a.slice(0,1) == "h" || a.slice(0,1) == "H" );
    console.log(hName) ;   
}

function bai6(namee, kyTu){
    const hName = namee.filter(a => a.slice(0,1) == kyTu);
    console.log(hName) ;   
}