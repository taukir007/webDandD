function showText() {
  const colors = ["#ff5f56", "#47cfd2", "#ffbd2e", "#27c93f", "#ae81ff"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  let html = `
        <div style="text-align:center; padding: 40px; border: 2px dashed ${randomColor}; border-radius: 15px;">
            <h2 style="color: ${randomColor}">UI Color Sync</h2>
            <p>The current accent color is: <strong>${randomColor}</strong></p>
            <button style="background:${randomColor}; border:none; padding:10px; border-radius:5px; cursor:pointer;" 
                    onclick="alert('Button from external JS clicked!')">
                Interactive Button
            </button>
        </div>
    `;

  document.getElementById("show").innerHTML = html;
}
