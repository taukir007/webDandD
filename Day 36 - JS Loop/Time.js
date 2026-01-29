function showText() {
  // Clear any existing intervals to prevent memory leaks
  if (window.clockInterval) clearInterval(window.clockInterval);

  window.clockInterval = setInterval(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    document.getElementById("show").innerHTML = `
            <div style="display:flex; justify-content:center; align-items:center; height:100%;">
                <div style="font-size: 3rem; font-family: 'Courier New'; color: #47cfd2; text-shadow: 0 0 10px #47cfd2;">
                    ${timeString}
                </div>
            </div>
        `;
  }, 1000);
}
