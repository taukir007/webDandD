function calculate1() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 + num2;
  document.getElementById("result").textContent = "Result: " + result;
}

function calculate2() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 - num2;
  document.getElementById("result").textContent = "Result: " + result;
}

function calculate3() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 * num2;
  document.getElementById("result").textContent = "Result: " + result;
}

function calculate4() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
  document.getElementById("result").textContent = "Result: " + result;
}
