// Footer Live Date & Time
function updateTime() {
  const now = new Date();
  document.getElementById("datetime").innerText = now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();
