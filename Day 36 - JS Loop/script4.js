// script1.js
async function showText(instanceId) {
  let text = "Hello World ";
  let i = 1;
  let result = "";

  while (i <= 10) {
    // CHECK: If global currentScriptId changed, STOP IMMEDIATELY
    if (instanceId !== currentScriptId) return;

    result += text + i + "<br>";
    document.getElementById("show").innerHTML = result;

    await sleep(1000); // 1 second delay
    i++;
  }
}
