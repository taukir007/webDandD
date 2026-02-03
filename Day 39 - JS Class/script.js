let fsbutton = document.querySelector("#fontsize");
let fsshow = document.querySelector("#show");

fsbutton.addEventListener("click", function () {
  let inumber = document.querySelector("#sizevalue").value;
  fsshow.style.fontSize = inumber + "px";
});
