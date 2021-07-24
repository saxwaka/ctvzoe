var tranghientai = 1;
var string = "";
var product_id = 0;

var sanpham = [
  "1-----nike-----38-----400-----50-----cao cap-----4-----https://f43-zpg.zdn.vn/5331231726879722915/6cfa13441936ee68b727.jpg-----https://f43-zpg.zdn.vn/9011101974931247576/d5262ea524d7d3898ac6.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f19-zpg.zdn.vn/6318559544569110535/77aa4c274655b10be844.jpg",
  "1-----nike-----38-----400-----50-----cao cap-----7-----https://f43-zpg.zdn.vn/5331231726879722915/6cfa13441936ee68b727.jpg-----https://f43-zpg.zdn.vn/9011101974931247576/d5262ea524d7d3898ac6.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f19-zpg.zdn.vn/6318559544569110535/77aa4c274655b10be844.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg",
  "1-----nike-----38-----400-----50-----cao cap-----7-----https://f43-zpg.zdn.vn/5331231726879722915/6cfa13441936ee68b727.jpg-----https://f43-zpg.zdn.vn/9011101974931247576/d5262ea524d7d3898ac6.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f19-zpg.zdn.vn/6318559544569110535/77aa4c274655b10be844.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg",
  "1-----nike-----38-----400-----50-----cao cap-----7-----https://f43-zpg.zdn.vn/5331231726879722915/6cfa13441936ee68b727.jpg-----https://f43-zpg.zdn.vn/9011101974931247576/d5262ea524d7d3898ac6.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f19-zpg.zdn.vn/6318559544569110535/77aa4c274655b10be844.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg",
  "1-----nike-----38-----400-----50-----cao cap-----7-----https://f43-zpg.zdn.vn/5331231726879722915/6cfa13441936ee68b727.jpg-----https://f43-zpg.zdn.vn/9011101974931247576/d5262ea524d7d3898ac6.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f19-zpg.zdn.vn/6318559544569110535/77aa4c274655b10be844.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg",
  "1-----nike-----38-----400-----50-----cao cap-----7-----https://f43-zpg.zdn.vn/5331231726879722915/6cfa13441936ee68b727.jpg-----https://f43-zpg.zdn.vn/9011101974931247576/d5262ea524d7d3898ac6.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f19-zpg.zdn.vn/6318559544569110535/77aa4c274655b10be844.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg",
  "1-----nike-----38-----400-----50-----cao cap-----7-----https://f43-zpg.zdn.vn/5331231726879722915/6cfa13441936ee68b727.jpg-----https://f43-zpg.zdn.vn/9011101974931247576/d5262ea524d7d3898ac6.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f19-zpg.zdn.vn/6318559544569110535/77aa4c274655b10be844.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg",
  "1-----nike-----38-----400-----50-----cao cap-----7-----https://f43-zpg.zdn.vn/5331231726879722915/6cfa13441936ee68b727.jpg-----https://f43-zpg.zdn.vn/9011101974931247576/d5262ea524d7d3898ac6.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f19-zpg.zdn.vn/6318559544569110535/77aa4c274655b10be844.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg-----https://f40-zpg.zdn.vn/3726143245847184590/81ae16271c55eb0bb244.jpg",
  
];

var bienx = sanpham.length - (tranghientai - 1) * 6;
var sp1 = sanpham[bienx - 1].split("-----", 20);
var sp2 = sanpham[bienx - 2].split("-----", 20);
var sp3 = sanpham[bienx - 3].split("-----", 20);
var sp4 = sanpham[bienx - 4].split("-----", 20);
var sp5 = sanpham[bienx - 5].split("-----", 20);
var sp6 = sanpham[bienx - 6].split("-----", 20);
var sp = [];
function hienthisp(x) {
  string = "";
  if (x > 0) {
    string += '<div class="col-xl-4 col-md-6 noidung" onclick="goiham(1)">';
    string += '<a href="#overlay">';
    string += '<img src="' + sp1[7] + '" alt="Chưa có SP">';
    string += '<h1 class="h1_text">Tên SP: ' + sp1[1] + "</h1>";
    string += '<h1 class="h1_text">Phân Khúc: ' + sp1[5] + "</h1>";
    string += '<h1 class="h1_text">Giá SP: ' + sp1[3] + ".000vnđ</h1>";
    string += '<h1 class="h1_text">Hoa Hồng CTV: ' + sp1[4] + ".000vnđ</h1>";
    string += "</a>";
    string += "</div>";
  }
  if (x > 1) {
    string += '<div class="col-xl-4 col-md-6 noidung" onclick="goiham(2)">';
    string += '<a href="#overlay">';
    string += '<img src="' + sp2[7] + '" alt="Chưa có SP">';
    string += '<h1 class="h1_text">Tên SP: ' + sp2[1] + "</h1>";
    string += '<h1 class="h1_text">Phân Khúc: ' + sp2[5] + "</h1>";
    string += '<h1 class="h1_text">Giá SP: ' + sp2[3] + ".000vnđ</h1>";
    string += '<h1 class="h1_text">Hoa Hồng CTV: ' + sp2[4] + ".000vnđ</h1>";
    string += "</a>";
    string += "</div>";
  }
  if (x > 2) {
    string += '<div class="col-xl-4 col-md-6 noidung" onclick="goiham(3)">';
    string += '<a href="#overlay">';
    string += '<img src="' + sp3[7] + '" alt="Chưa có SP">';
    string += '<h1 class="h1_text">Tên SP: ' + sp3[1] + "</h1>";
    string += '<h1 class="h1_text">Phân Khúc: ' + sp3[5] + "</h1>";
    string += '<h1 class="h1_text">Giá SP: ' + sp3[3] + ".000vnđ</h1>";
    string += '<h1 class="h1_text">Hoa Hồng CTV: ' + sp3[4] + ".000vnđ</h1>";
    string += "</a>";
    string += "</div>";
  }
  if (x > 3) {
    string += '<div class="col-xl-4 col-md-6 noidung" onclick="goiham(4)">';
    string += '<a href="#overlay">';
    string += '<img src="' + sp4[7] + '" alt="Chưa có SP">';
    string += '<h1 class="h1_text">Tên SP: ' + sp4[1] + "</h1>";
    string += '<h1 class="h1_text">Phân Khúc: ' + sp4[5] + "</h1>";
    string += '<h1 class="h1_text">Giá SP: ' + sp4[3] + ".000vnđ</h1>";
    string += '<h1 class="h1_text">Hoa Hồng CTV: ' + sp4[4] + ".000vnđ</h1>";
    string += "</a>";
    string += "</div>";
  }
  if (x > 4) {
    string += '<div class="col-xl-4 col-md-6 noidung" onclick="goiham(5)">';
    string += '<a href="#overlay">';
    string += '<img src="' + sp5[7] + '" alt="Chưa có SP">';
    string += '<h1 class="h1_text">Tên SP: ' + sp5[1] + "</h1>";
    string += '<h1 class="h1_text">Phân Khúc: ' + sp5[5] + "</h1>";
    string += '<h1 class="h1_text">Giá SP: ' + sp5[3] + ".000vnđ</h1>";
    string += '<h1 class="h1_text">Hoa Hồng CTV: ' + sp5[4] + ".000vnđ</h1>";
    string += "</a>";
    string += "</div>";
  }
  if (x > 5) {
    string += '<div class="col-xl-4 col-md-6 noidung" onclick="goiham(6)">';
    string += '<a href="#overlay">';
    string += '<img src="' + sp6[7] + '" alt="Chưa có SP">';
    string += '<h1 class="h1_text">Tên SP: ' + sp6[1] + "</h1>";
    string += '<h1 class="h1_text">Phân Khúc: ' + sp6[5] + "</h1>";
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
  document.getElementById("phankhuc").innerHTML = sp[5];
  let str1 = "";
  str1 +=
    '<img src = "'+sp[7]+'" alt = "shoe image"></img>';
  document.getElementById("listanh").innerHTML = str1;

  for (let index = 7; index < 7 + Number(sp[6]); index++) {
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
    sp1 = sanpham[bienx - 1].split("-----", 20);
  }
  if (bienx - 2 >= 0) {
    sp2 = sanpham[bienx - 2].split("-----", 20);
  }
  if (bienx - 3 >= 0) {
    sp3 = sanpham[bienx - 3].split("-----", 20);
  }
  if (bienx - 4 >= 0) {
    sp4 = sanpham[bienx - 4].split("-----", 20);
  }
  if (bienx - 5 >= 0) {
    sp5 = sanpham[bienx - 5].split("-----", 20);
  }
  if (bienx - 6 >= 0) {
    sp6 = sanpham[bienx - 6].split("-----", 20);
  }
  hienthisp(bienx);
}
function anhsp(x) {
  let string = "";
  string +=
    '<img src = "'+sp[x]+'" alt = "shoe image"></img>';
  document.getElementById("listanh").innerHTML = string;
}
