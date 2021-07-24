var tranghientai = 1;
var string = "";
var product_id = 0;

var sanpham = [
  "001-----nike 1-----36-39-----300-----20-----4-----product/1/0.jpg-----product/1/1.jpg-----product/1/2.jpg-----product/1/3.jpg",
  "002-----nike 2-----36-39-----300-----20-----4-----product/1/0.jpg-----product/1/1.jpg-----product/1/2.jpg-----product/1/3.jpg",
  "003-----nike 3-----36-39-----300-----20-----4-----product/1/0.jpg-----product/1/1.jpg-----product/1/2.jpg-----product/1/3.jpg",
  "004-----nike 4-----36-39-----300-----20-----4-----product/1/0.jpg-----product/1/1.jpg-----product/1/2.jpg-----product/1/3.jpg",
  "005-----nike 5-----36-39-----300-----20-----4-----product/1/0.jpg-----product/1/1.jpg-----product/1/2.jpg-----product/1/3.jpg",
  "006-----nike 6-----36-39-----300-----20-----4-----product/1/0.jpg-----product/1/1.jpg-----product/1/2.jpg-----product/1/3.jpg",
  "007-----nike 7-----36-39-----300-----20-----4-----product/1/0.jpg-----product/1/1.jpg-----product/1/2.jpg-----product/1/3.jpg",
  "008-----nike 8-----36-39-----350-----20-----4-----product/1/0.jpg-----product/1/1.jpg-----product/1/2.jpg-----product/1/3.jpg",
  "009-----nike 9-----36-39-----300-----20-----4-----product/1/0.jpg-----product/1/1.jpg-----product/1/2.jpg-----product/1/3.jpg",
  "010-----Nike Loang-----36-43-----400-----50-----5-----https://b-f42-zpg.zdn.vn/4353747090640546662/5a715659321ac7449e0b.jpg-----https://f39-zpg.zdn.vn/7286405583677663722/a18ff61c925f67013e4e.jpg-----https://b-f40-zpg.zdn.vn/2852540532100328754/2df3fbf69fb56aeb33a4.jpg-----https://b-f38-zpg.zdn.vn/7633013225544021252/91b9d3f4b7b742e91ba6.jpg-----https://b-f38-zpg.zdn.vn/7504594204968155088/c975557e313dc4639d2c.jpg",
  "011-----JD panda low-----36->43-----400-----20-----4-----https://f43-zpg.zdn.vn/1890786620495938994/e76826626610914ec801.jpg-----https://f43-zpg.zdn.vn/378664106599094711/2beb87d3c7a130ff69b0.jpg-----https://f38-zpg.zdn.vn/2792505691519474250/9ee135d575a782f9dbb6.jpg-----https://f34-zpg.zdn.vn/3451446942093659183/fec6b3f0f38204dc5d93.jpg",
  
];

var bienx = sanpham.length - (tranghientai - 1) * 6;
var sp1 = sanpham[bienx - 1].split("-----", 15);
var sp2 = sanpham[bienx - 2].split("-----", 15);
var sp3 = sanpham[bienx - 3].split("-----", 15);
var sp4 = sanpham[bienx - 4].split("-----", 15);
var sp5 = sanpham[bienx - 5].split("-----", 15);
var sp6 = sanpham[bienx - 6].split("-----", 15);
var sp = [];
function hienthisp(x) {
  string = "";
  if (x > 0) {
    string += '<div class="col-xl-4 col-md-6 noidung" onclick="goiham(1)">';
    string += '<a href="#overlay">';
    string += '<img src="' + sp1[6] + '" alt="Chưa có SP">';
    string += '<h1 class="h1_text">' + sp1[1] + "</h1>";
    string += '<h1 class="h1_text">Giá SP: ' + sp1[3] + ".000vnđ</h1>";
    string += '<h1 class="h1_text">Hoa Hồng CTV: ' + sp1[4] + ".000vnđ</h1>";
    string += "</a>";
    string += "</div>";
  }
  if (x > 1) {
    string += '<div class="col-xl-4 col-md-6 noidung" onclick="goiham(2)">';
    string += '<a href="#overlay">';
    string += '<img src="' + sp2[6] + '" alt="Chưa có SP">';
    string += '<h1 class="h1_text">' + sp2[1] + "</h1>";
    string += '<h1 class="h1_text">Giá SP: ' + sp2[3] + ".000vnđ</h1>";
    string += '<h1 class="h1_text">Hoa Hồng CTV: ' + sp2[4] + ".000vnđ</h1>";
    string += "</a>";
    string += "</div>";
  }
  if (x > 2) {
    string += '<div class="col-xl-4 col-md-6 noidung" onclick="goiham(3)">';
    string += '<a href="#overlay">';
    string += '<img src="' + sp3[6] + '" alt="Chưa có SP">';
    string += '<h1 class="h1_text">' + sp3[1] + "</h1>";
    string += '<h1 class="h1_text">Giá SP: ' + sp3[3] + ".000vnđ</h1>";
    string += '<h1 class="h1_text">Hoa Hồng CTV: ' + sp3[4] + ".000vnđ</h1>";
    string += "</a>";
    string += "</div>";
  }
  if (x > 3) {
    string += '<div class="col-xl-4 col-md-6 noidung" onclick="goiham(4)">';
    string += '<a href="#overlay">';
    string += '<img src="' + sp4[6] + '" alt="Chưa có SP">';
    string += '<h1 class="h1_text">' + sp4[1] + "</h1>";
    string += '<h1 class="h1_text">Giá SP: ' + sp4[3] + ".000vnđ</h1>";
    string += '<h1 class="h1_text">Hoa Hồng CTV: ' + sp4[4] + ".000vnđ</h1>";
    string += "</a>";
    string += "</div>";
  }
  if (x > 4) {
    string += '<div class="col-xl-4 col-md-6 noidung" onclick="goiham(5)">';
    string += '<a href="#overlay">';
    string += '<img src="' + sp5[6] + '" alt="Chưa có SP">';
    string += '<h1 class="h1_text">' + sp5[1] + "</h1>";
    string += '<h1 class="h1_text">Giá SP: ' + sp5[3] + ".000vnđ</h1>";
    string += '<h1 class="h1_text">Hoa Hồng CTV: ' + sp5[4] + ".000vnđ</h1>";
    string += "</a>";
    string += "</div>";
  }
  if (x > 5) {
    string += '<div class="col-xl-4 col-md-6 noidung" onclick="goiham(6)">';
    string += '<a href="#overlay">';
    string += '<img src="' + sp6[6] + '" alt="Chưa có SP">';
    string += '<h1 class="h1_text">' + sp6[1] + "</h1>";
    string += '<h1 class="h1_text">Giá SP: ' + sp6[3] + ".000vnđ</h1>";
    string += '<h1 class="h1_text">Hoa Hồng CTV: ' + sp6[4] + ".000vnđ</h1>";
    string += "</a>";
    string += "</div>";
  }
  document.getElementById("product_item").innerHTML = string;
}

hienthisp(6);

function goiham(x) {
  switch (x) {
    case 1:
      sp = sp1;
      break;
    case 2:
      sp = sp2;
      break;
    case 3:
      sp = sp3;
      break;
    case 4:
      sp = sp4;
      break;
    case 5:
      sp = sp5;
      break;
    case 6:
      sp = sp6;
      break;
    default:
      break;
  }
  anpt();
}
document.getElementById("overlay").style.visibility = "hidden";
function anpt() {
  let string = "";
  document.getElementById("tensp").innerHTML = sp[1];
  document.getElementById("masp").innerHTML = sp[0];
  document.getElementById("giasp").innerHTML = sp[3] + ".000 VNĐ";
  document.getElementById("hoahong").innerHTML = sp[4] + ".000 VNĐ";
  document.getElementById("size").innerHTML = sp[2];
  let str1 = "";
  str1 +=
    '<img src = "'+sp[6]+'" alt = "shoe image"></img>';
  document.getElementById("listanh").innerHTML = str1;

  for (let index = 6; index < 6 + Number(sp[5]); index++) {
    string += '<div class="img-item" onclick="anhsp(' + index + ')">';
    string += '<img src="' + sp[index] + '" alt="shoe image" />';
    string += "</div>";
  }
  document.getElementById("itemanh").innerHTML = string;

  document.getElementById("overlay").style.zIndex = "3";
  document.getElementById("overlay").style.visibility = "visible";
}
function hienpt() {
  document.getElementById("overlay").style.zIndex = "-3";
  document.getElementById("overlay").style.visibility = "hidden";
}

$("#trang1").addClass("active");
function loadpage(x) {
  hienpt();
  $("#trang" + tranghientai).removeClass("active");
  $("#trang" + x).addClass("active");
  tranghientai = x;
  bienx = sanpham.length - (tranghientai - 1) * 6;
  if (bienx - 1 >= 0) {
    sp1 = sanpham[bienx - 1].split("-----", 15);
  }
  if (bienx - 2 >= 0) {
    sp2 = sanpham[bienx - 2].split("-----", 15);
  }
  if (bienx - 3 >= 0) {
    sp3 = sanpham[bienx - 3].split("-----", 15);
  }
  if (bienx - 4 >= 0) {
    sp4 = sanpham[bienx - 4].split("-----", 15);
  }
  if (bienx - 5 >= 0) {
    sp5 = sanpham[bienx - 5].split("-----", 15);
  }
  if (bienx - 6 >= 0) {
    sp6 = sanpham[bienx - 6].split("-----", 15);
  }
  hienthisp(bienx);
}
function anhsp(x) {
  let string = "";
  string +=
    '<img src = "'+sp[x]+'" alt = "shoe image"></img>';
  document.getElementById("listanh").innerHTML = string;
}
