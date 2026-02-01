const terminal = document.getElementById("terminal");
const display = document.getElementById("show");
const fileListContainer = document.getElementById("file-list");

const myFiles = [
  "UIColor.js",
  "Time.js",
  "For.js",
  "While.js",
  "doWhile.js",
  "break.js",
];

function renderFiles() {
  fileListContainer.innerHTML = "";
  myFiles.forEach((file) => {
    const item = document.createElement("div");
    item.className = "file-item";
    item.innerText = file;
    item.onclick = () => {
      document.getElementById("jsFile").value = file;
      loadJS(file);
    };
    fileListContainer.appendChild(item);
  });
}

function logToTerminal(msg, type = "") {
  const div = document.createElement("div");
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour12: false });
  div.className = `log-item ${type}`;
  div.innerHTML = `<span class="timestamp">[${timeStr}]</span> ${msg}`;
  terminal.appendChild(div);
  terminal.scrollTop = terminal.scrollHeight;
}

async function loadJS(manualName = null) {
  let fileName = manualName || document.getElementById("jsFile").value.trim();
  if (!fileName) return logToTerminal("Error: No file specified.", "error");
  if (!fileName.endsWith(".js")) fileName += ".js";

  logToTerminal(`Cleaning environment and running ${fileName}...`);

  // 1. KILL EVERYTHING: We remove the old iframe if it exists
  const oldSandbox = document.getElementById("sandbox");
  if (oldSandbox) oldSandbox.remove();

  // 2. CREATE A NEW SANDBOX (Iframe)
  // This provides a 100% fresh 'window' and 'document' object
  const iframe = document.createElement("iframe");
  iframe.id = "sandbox";
  iframe.style.display = "none"; // Hide the iframe
  document.body.appendChild(iframe);

  // 3. INJECT THE RUNNER LOGIC INTO THE SANDBOX
  const sandboxDoc = iframe.contentWindow.document;

  // We fetch the user's JS file text
  try {
    const response = await fetch(`./${fileName}?v=${new Date().getTime()}`);
    if (!response.ok) throw new Error("File not found");
    const userCode = await response.text();

    // Prepare the sandbox HTML
    const sandboxContent = `
            <html>
            <body>
                <script>
                    // Provide the sleep function inside the sandbox
                    window.sleep = (ms) => new Promise(res => setTimeout(res, ms));

                    // MOCK the document.getElementById so it targets the MAIN page
                    window.document.getElementById = (id) => {
                        return window.parent.document.getElementById(id);
                    };

                    // Inject the user's code
                    ${userCode}

                    // Run the function
                    if (typeof showText === 'function') {
                        showText().catch(console.error);
                    }
                <\/script>
            </body>
            </html>
        `;

    sandboxDoc.open();
    sandboxDoc.write(sandboxContent);
    sandboxDoc.close();

    logToTerminal(
      `Script ${fileName} is now active in a fresh sandbox.`,
      "success",
    );
  } catch (err) {
    logToTerminal(`Error: ${err.message}`, "error");
  }
}

function clearAll() {
  const oldSandbox = document.getElementById("sandbox");
  if (oldSandbox) oldSandbox.remove();
  display.innerHTML = '<em style="color:#444">Output cleared.</em>';
  terminal.innerHTML = "";
  logToTerminal("Sandbox destroyed. System ready.", "success");
}

renderFiles();
