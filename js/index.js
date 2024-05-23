
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
     tongTien = chonKm * giatienkmdautien;
} else if (chonKm > 1 && chonKm <= 19){
    tongTien = giatienkmdautien + (chonKm - 1)* gia1den19;
} else {
    tongTien = giatienkmdautien + 18 * gia1den19 +  (chonKm - 19) * giatren19 ;
}

document.getElementById("divThanhTien").style.display= "block";
document.querySelector("#xuatTien").innerHTML = tongTien;



}



document.querySelector(".HoaDon").onclick = function() {
    let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
    let chonKm = document.querySelector("#txt-km").value * 1;
    let chonXe = document.querySelector("input[type='radio']:checked").value;
    console.log(chonXe);
    let giatienkmdautien = kiemtragiatienkmdautien(chonXe);
    let gia1den19 = kiemtragiatientu1den19(chonXe);
    let giatren19 = kiemtragiatien19kmtrolen (chonXe);
    let giacho = kiemtragiatiencho(chonXe);
    let tongTienCho = 0;
    let tongTienChay = 0;
    let tongTien = 0;
    let tongGiaTienKmDauTien = 0;
    let tongGiaTienKm1Den19 = 0;
    let tongGiaTienKmTu19TroLen = 0;
    let soKmDauTien = 0;
    let soKm1Den19 = 0;
    let soKmTu19TroLen = 0;
    let soKmDauTienHienThi = 0
    let soKm1Den19HienThi = 0;
    let soKmTu19TroLenHienThi = 0;
// tính các cột tiền từ km đầu tiên đến km cuối 
     if (chonKm <= 1 && chonKm > 0) {
        soKmDauTienHienThi = chonKm;
          soKmDauTien = chonKm;
          tongGiaTienKmDauTien = chonKm * giatienkmdautien;
        }
       else {
        soKmDauTienHienThi = 1;
          soKmDauTien = 1;
          tongGiaTienKmDauTien = giatienkmdautien;
        }
        if (chonKm > 1 && chonKm <= 19) {
                 soKm1Den19HienThi = chonKm;
                 soKm1Den19 = chonKm - 1;
                  tongGiaTienKm1Den19 = soKm1Den19 * gia1den19;
                } else if (soKM > 19) {
                    soKm1Den19HienThi = 19;
                    soKm1Den19 = 18;
                    tongGiaTienKm1Den19 = soKm1Den19 * gia1den19;
                  } else {
                    soKm1Den19HienThi = 0;
                  }
        if (chonKm > 19) {
                   soKmTu19TroLenHienThi = chonKm;
                  soKmTu19TroLen = chonKm - 19;
                  tongGiaTienKmTu19TroLen = soKmTu19TroLen * giatren19;
                }
// tính số tiền tổng ở dòng tổng tiền 
        if (chonKm <= 1 && chonKm > 0){
            tongTien = chonKm * giatienkmdautien;
       } else if (chonKm > 1 && chonKm <= 19){
           tongTien = giatienkmdautien + (chonKm - 1)* gia1den19;
       } else {
           tongTien = giatienkmdautien + 18 * gia1den19 +  (chonKm - 19) * giatren19 ;
       }
        console.log(tongTien)

     if (thoiGianCho >= 3) {
         tongTienCho = Math.floor(giacho / 3) * giacho;
     } else {
         tongTienCho = 0 ;
     }
      tongTienChay = tongTien + tongTienCho ;

     let table =
           '<table border="1px">' +
           '<th style="text-align: center" colspan="4">Chi tiết hóa đơn</th>' +
           "<tbody>" +
           "<tr>" +
           " <td>CHI TIẾT</td>" +
           "<td>SỬ DỤNG</td>" +
           "<td>ĐƠN GIÁ (1000đ)</td>" +
           "<td>THÀNH TIỀN (1000đ)</td>" +
           "</tr>" +
           "<tr>" +
           "<td>KM Đầu Tiên</td>" +
           `<td>${chonKm} KM</td>` +
           `<td>${giatienkmdautien.toLocaleString("vi", {
             currency: "VND",
             style: "currency",
           })}</td>` +
           `<td>${tongGiaTienKmDauTien.toLocaleString("vi", {
             currency: "VND",
             style: "currency",
           })}</td>` +
           "</tr>" +
           "<tr>" +
           `<td>Từ ${soKmDauTien} đến ${soKm1Den19HienThi}</td>` +
           `<td>${soKm1Den19} KM</td>` +
           `<td>${gia1den19.toLocaleString("vi", {
             currency: "VND",
             style: "currency",
           })}</td>` +
           `<td>${tongGiaTienKm1Den19.toLocaleString("vi", {
             currency: "VND",
             style: "currency",
           })}</td>` +
           "</tr>" +
           "<tr>" +
           `<td>Từ ${soKm1Den19HienThi} đến ${soKmTu19TroLenHienThi}</td>` +
           `<td>${soKmTu19TroLen} KM</td>` +
           `<td>${giatren19.toLocaleString("vi", {
             currency: "VND",
             style: "currency",
           })}</td>` +
           `<td>${tongGiaTienKmTu19TroLen.toLocaleString("vi", {
             currency: "VND",
             style: "currency",
           })}</td>` +
           "</tr>" +
           "<tr>" +
           `<td>Thời gian chờ</td>` +
           `<td>${thoiGianCho} phút</td>` +
           `<td>${giacho.toLocaleString("vi", {
             currency: "VND",
             style: "currency",
           })}</td>` +
           `<td>${tongTienCho.toLocaleString("vi", {
             currency: "VND",
             style: "currency",
           })}</td>` +
           "</tr>" +
           "<tr>" +
           `<td colspan="4">Tổng tiền: ${tongTienChay.toLocaleString("vi", {
             currency: "VND",
             style: "currency",
           })}</td>` +
           "</tr>" +
           "</tbody>" +
           "</table>";
         document.querySelector(".modal-body").innerHTML = table;
         $('#myModal').modal('show');

 
};