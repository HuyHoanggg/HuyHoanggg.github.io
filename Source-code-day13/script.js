function test(a){
    let b;
    if (typeof a == "string"){
        return "input must be a number";
    }else{
        b=a;
    }
    if (a<0){
        return "a là số âm";
    }else if (a>0){
        return "a là số dương";
    }else{
        return "a = 0";
    }
}

function tinhDiem(x,y,z){
    if (x<0 ||y<0 || z < 0 || x>10 || y>10||z > 10){
        return "Điểm chỉ có từ 0-10"
    }
    var diemTrungBinh = ((x+y+z)/3);
    if (diemTrungBinh>=0 && diemTrungBinh <3){
        return "Yếu";
    }else if (diemTrungBinh >= 3 && diemTrungBinh < 6.5){
        return "Trung Bình";
    }else if (diemTrungBinh >=6.5 && diemTrungBinh < 8){
        return "Khá";
    }else{
        return "Giỏi";
    }
}

function getDay(){
    switch (new Date().getDay()) {
        case 0:
        day = "Sunday";
        break;
        case 1:
        day = "Monday";
        break;
        case 2:
        day = "Tuesday";
        break;
        case 3:
        day = "Wednesday";
        break;
        case 4:
        day = "Thursday";
        break;
        case 5:
        day = "Friday";
        break;
        case 6:
        day = "Saturday";
    }
    return day;
}