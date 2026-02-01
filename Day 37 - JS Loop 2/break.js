let number = 5;

function showText() {
  let result = "<h3>Multiplication Table for " + number + "</h3>";
  result += "<ul>";

  for (let i = 1; i <= 10; i++) {
    if (i == 5) {
      result += "<br>Found a Continue<br><br>";
      continue;
    }
    if (i == 8) {
      result += "<br>Found a Break";
      break;
    }
    result += "<li>" + number + " x " + i + " = " + number * i + "</li>";
  }

  result += "</ul>";
  document.getElementById("show").innerHTML = result;
}
