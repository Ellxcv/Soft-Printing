// Mengambil elemen-elemen yang dibutuhkan
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");

btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  slide.style.transform = "translateX(-800px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  slide.style.transform = "translateX(-1600px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

function sendMessage() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var nomorHp = document.getElementById("nomor-hp").value;

  var pesan = "Halo, saya tertarik untuk pesan sekarang.";
  pesan += "Nama: " + encodeURIComponent(nama) + " ";
  pesan += "Email: " + encodeURIComponent(email) + " ";
  pesan += "Nomor HP: " + encodeURIComponent(nomorHp);

  var link =
    "https://api.whatsapp.com/send?phone=+6282111317247&text=" +
    encodeURIComponent(pesan);

  window.open(link, "_blank");
}

