var tranghientai = 1;
var string = "";
var product_id = 0;
var product = [
  {
    masp: "snk001",
    soanh: 4,
    tensp: "air force 1",
    giasp: "300",
    hoahong: "20",
    size: "conhang",
  },
  {
    masp: "snk001",
    soanh: 4,
    tensp: "air force 2",
    giasp: "300",
    hoahong: "20",
    size: "conhang",
  },
  {
    masp: "snk001",
    soanh: 8,
    tensp: "air force 3",
    giasp: "300",
    hoahong: "20",
    size: "conhang",
  },
  {
    masp: "snk001",
    soanh: 4,
    tensp: "air force 4",
    giasp: "300",
    hoahong: "20",
    size: "conhang",
  },
  {
    masp: "snk001",
    soanh: 4,
    tensp: "air force 5",
    giasp: "300",
    hoahong: "20",
    size: "conhang",
  },
  {
    masp: "snk001",
    soanh: 4,
    tensp: "air force 6",
    giasp: "300",
    hoahong: "20",
    size: "conhang",
  },
  {
    masp: "snk001",
    soanh: 4,
    tensp: "air force 7",
    giasp: "300",
    hoahong: "20",
    size: "conhang",
  },
];
function hienthisp() {
  string = "";
  for (let index = product.length; index > 0; index--) {
    if (
      index <= product.length - (tranghientai - 1) * 6 &&
      index > product.length - tranghientai * 6
    ) {
      string +=
        '<div class="col-xl-4 col-md-6 noidung" onclick="anpt(' + index + ')">';
      string += '<a href="#overlay">';
      string += '<img src="product/' + index + '/0.jpg" alt="Chưa có SP">';
      string += '<h1 class="h1_text">' + product[index - 1].tensp + "</h1>";
      string +=
        '<h1 class="h1_text">Giá SP: ' +
        product[index - 1].giasp +
        ".000vnđ</h1>";
      string +=
        '<h1 class="h1_text">Hoa Hồng CTV: ' +
        product[index - 1].hoahong +
        ".000vnđ</h1>";
      string += "</a>";
      string += "</div>";
    }
  }
  document.getElementById("product_item").innerHTML = string;
}
hienthisp();

document.getElementById("overlay").style.visibility = "hidden";
function anpt(x) {
  let string = "";
  product_id = x;
  document.getElementById("tensp").innerHTML = product[x - 1].tensp;
  document.getElementById("masp").innerHTML = product[x - 1].masp;
  document.getElementById("giasp").innerHTML =
    product[x - 1].giasp + ".000 VNĐ";
  document.getElementById("hoahong").innerHTML =
    product[x - 1].hoahong + ".000 VNĐ";
  document.getElementById("size").innerHTML = product[x - 1].size;
  for (let index = 0; index < product[x - 1].soanh; index++) {
    string += '<div class="img-item" onclick="anhsp('+index+')">';
    string += '<img src="product/'+x+'/'+index+'.jpg" alt="shoe image" />';
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
  hienthisp();
}
function anhsp(x) {
  let string = "";
  string += '<img src = "product/'+product_id+'/' + x + '.jpg" alt = "shoe image"></img>';
  document.getElementById("listanh").innerHTML = string;
}
