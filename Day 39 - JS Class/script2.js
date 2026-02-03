let bswitch = document.querySelector("#switch");
let imgshow = document.querySelector("#myImage");

bswitch.addEventListener("click", function () {
  if (imgshow.src.includes("pic_bulboff.gif")) {
    imgshow.src = "pic_bulbon.gif";
  } else {
    imgshow.src = "pic_bulboff.gif";
  }
});
