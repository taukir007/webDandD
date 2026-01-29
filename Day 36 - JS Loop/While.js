let a = 1;
let text = "";
while (a < 10) {
  text += "Number is = " + a + "<br>";
  a++;
}
document.getElementById("show").innerHTML = text;
