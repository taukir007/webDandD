let a = 1;
let text = "";
do {
  text += "Number is = " + a + "<br>";
  a++;
} while (a < 10);
document.getElementById("show").innerHTML = text;
