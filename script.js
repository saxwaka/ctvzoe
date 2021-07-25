var sanpham = [
  "001-----Puma nhũ hồng-----36->39-----280-----50-----Hàng Đẹp-----4-----https://f18-zpg.zdn.vn/4376255417014022031/8558796a4009b757ee18.jpg-----https://f41-zpg.zdn.vn/4779244804298589816/a69ef9acc0cf37916ede.jpg-----https://f37-zpg.zdn.vn/6059405126913778463/e4d1771d497ebe20e76f.jpg-----https://f33-zpg.zdn.vn/982811361066778897/c492165f283cdf62862d.jpg",
  "002-----Puma cầu vồng-----36->39-----280-----50-----Hàng Đẹp-----4-----https://f18-zpg.zdn.vn/8433038294129417173/ac38ab9ea2fc55a20ced.jpg-----https://f42-zpg.zdn.vn/2676670670921440081/b328568b5fe9a8b7f1f8.jpg-----https://f34-zpg.zdn.vn/1416286261449368554/e0955c2b5549a217fb58.jpg-----https://f40-zpg.zdn.vn/6218686607510990883/fa616edc67be90e0c9af.jpg",
  "003-----Jd panda-----36->43-----450-----50-----rep 1:1-----4-----https://f41-zpg.zdn.vn/6507447599845781999/9811ae15687a9f24c66b.jpg-----https://f36-zpg.zdn.vn/3511301637030143298/4b4a6a4cac235b7d0232.jpg-----https://f43-zpg.zdn.vn/8367728213084569684/cbaed9a61fc9e897b1d8.jpg-----https://f36-zpg.zdn.vn/2671401329887875723/1480b48a72e585bbdcf4.jpg",
  "004-----Nike trắng xanh-----36-39-----450-----60-----rep 1:1-----4-----https://f43-zpg.zdn.vn/6855859200016312603/11c62c4e70278779de36.jpg-----https://f40-zpg.zdn.vn/4864517277302732031/72ae1a27464eb110e85f.jpg-----https://f41-zpg.zdn.vn/7517299189308671633/9ef1fe65a20c55520c1d.jpg-----https://f17-zpg.zdn.vn/1124331727157802115/a0a91a3a4653b10de842.jpg",
  "005-----Nike trắng hồng-----36-39-----450-----60-----rep 1:1-----4-----https://f41-zpg.zdn.vn/5706729648030732789/93b4d355a73e5060092f.jpg-----https://f37-zpg.zdn.vn/7144017348023261889/beb7cf43bb284c761539.jpg-----https://f17-zpg.zdn.vn/4401287610154152201/a3818576f11d06435f0c.jpg-----https://f43-zpg.zdn.vn/2650051757507049774/eeccdb3eaf55580b0144.jpg",
  "006-----Adidas SuperStar-----36-43-----360-----50-----rep 1:1-----5-----https://f43-zpg.zdn.vn/2234459177153204721/53efc0f53b80ccde9591.jpg-----https://f18-zpg.zdn.vn/2024704772771402231/d140385ec32b34756d3a.jpg-----https://f17-zpg.zdn.vn/3306804016833186648/75547d478632716c2823.jpg-----https://f38-zpg.zdn.vn/8944021300338838787/79743365c8103f4e6601.jpg-----https://f41-zpg.zdn.vn/1631448604673408793/93dd70cc8bb97ce725a8.jpg",
  "007-----Jd xanh ngọc cao cổ-----36-43-----480-----60-----rep 1:1-----4-----https://f39-zpg.zdn.vn/9188350347546357246/1300969e8de87ab623f9.jpg-----https://f19-zpg.zdn.vn/4491686966465615021/25ef8f7e940863563a19.jpg-----https://f17-zpg.zdn.vn/6921063768050526989/eac86b5b702d8773de3c.jpg-----https://f41-zpg.zdn.vn/6228840710198259244/ef161b8200f4f7aaaee5.jpg",
  "008-----Af1 trắng-----36-43-----370-----50-----rep 1:1-----6-----https://f42-zpg.zdn.vn/4126744958458160109/0c40d58c5cfdaba3f2ec.jpg-----https://f36-zpg.zdn.vn/244184080211828947/a9a1df6a561ba145f80a.jpg-----https://f19-zpg.zdn.vn/1637514723016293139/c36c4898c1e936b76ff8.jpg-----https://f38-zpg.zdn.vn/5136563437827337271/8fba1b4f923e65603c2f.jpg-----https://f19-zpg.zdn.vn/1215023292310416658/c1de442ccd5d3a03634c.jpg-----https://f17-zpg.zdn.vn/5065910559201247554/8d41428fcbfe3ca065ef.jpg",
  "009-----Vans caro buộc dây-----36-43-----350-----50-----rep 1:1-----4-----https://f42-zpg.zdn.vn/1169936298502080313/18ec5c09e175162b4f64.jpg-----https://f38-zpg.zdn.vn/3936752348365914269/64cbcc2e7152860cdf43.jpg-----https://f42-zpg.zdn.vn/8872743478659209082/ffe6c50c78708f2ed661.jpg-----https://f33-zpg.zdn.vn/3185098092108394150/473062d9dfa528fb71b4.jpg",
];
var tranghientai = 1;
var string = "";
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
  str1 += '<img src = "' + sp[7] + '" alt = "shoe image"></img>';
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
  string += '<img src = "' + sp[x] + '" alt = "shoe image"></img>';
  document.getElementById("listanh").innerHTML = string;
}
