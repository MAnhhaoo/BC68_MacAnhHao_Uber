
const UBER_CAR = "uberCar"
const UBER_SUB = "uberSUV"
const UBER_BLACK = "uberBlack"

const kiemtragiatienkmdautien = (chonXe) => {
    //thucj hiện kiểm tra loại xe ngndungf để trả về giá tiền phù hợp
    switch(chonXe){
        case UBER_CAR:
        return 8000;
        case UBER_SUB :
         return 9000;
        case UBER_BLACK:
          return 10000;
    }
};

const kiemtragiatientu1den19 = (chonXe) => {
      switch(chonXe){
        case UBER_CAR :
            return 7500;
        case UBER_SUB :
            return 8500;
        case UBER_BLACK : 
            return 9500;
      }
};
const kiemtragiatien19kmtrolen = (chonXe) => {
    switch (chonXe) {
        case UBER_CAR:
            return 7000 ;
        case UBER_SUB :
            return 8000;
        case UBER_BLACK :
            return 9000;
    }
};
const kiemtragiatiencho = (chonXe) => {
    switch (chonXe) {
    case UBER_CAR :
        return 2000;
    case UBER_SUB :
        return 3000;
    case UBER_BLACK :
        return 3500;
    }
}

document.querySelector("#btn_TinhTien").onclick = () => {
// lấy dự liệu từ ng dùng và lưu trữ (loại xe , số km , tgian chờ )
let chonXe = document.querySelector("input[type='radio']:checked").value;
let chonKm = document.querySelector("#txt-km").value * 1;
let chonTGCho = document.querySelector("#txt-thoiGianCho").value * 1;
console.log(chonXe);
console.log(chonKm);
console.log(chonTGCho);
let giatienkmdautien = kiemtragiatienkmdautien(chonXe);
let gia1den19 = kiemtragiatientu1den19(chonXe);
let giatren19 = kiemtragiatien19kmtrolen (chonXe);
let giacho = kiemtragiatiencho(chonXe);
 
// th1: di 1km 
let tongTien = 0;
if (chonKm <= 1 && chonKm > 0){
    let tongTien = chonKm * giatienkmdautien;
} else if (chonKm > 1 && chonKm <= 19){
    tongTien = giatienkmdautien + (chonKm - 1)* gia1den19;
} else {
    tongTien = giatienkmdautien + 18 * gia1den19 +  (chonKm - 19) * giatren19 ;
}

document.getElementById("divThanhTien").style.display= "block";
document.querySelector("#xuatTien").innerHTML = tongTien;

}
