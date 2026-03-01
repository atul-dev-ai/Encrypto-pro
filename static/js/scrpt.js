lucide.createIcons();
const API_BASE = "http://127.0.0.1:5000/api";

function switchTab(type) {
  document
    .getElementById("view-encrypt")
    .classList.toggle("hidden", type !== "encrypt");
  document
    .getElementById("view-decrypt")
    .classList.toggle("hidden", type !== "decrypt");
  document
    .getElementById("tab-enc")
    .classList.toggle("tab-active", type === "encrypt");
  document
    .getElementById("tab-dec")
    .classList.toggle("tab-active", type === "decrypt");
  document
    .getElementById("tab-enc")
    .classList.toggle("text-slate-400", type !== "encrypt");
  document
    .getElementById("tab-dec")
    .classList.toggle("text-slate-400", type !== "decrypt");
}

function checkStrength(p) {
  const bars = document.getElementById("strength-meter").children;
  const score =
    p.length > 8
      ? /[A-Z]/.test(p) && /[0-9]/.test(p)
        ? 3
        : 2
      : p.length > 0
        ? 1
        : 0;
  for (let i = 0; i < 3; i++)
    bars[i].className =
      i < score
        ? `flex-1 rounded-full ${["bg-red-400", "bg-orange-400", "bg-green-500"][score - 1]}`
        : "flex-1 rounded-full bg-slate-200";
}

function generatePass() {
  const p =
    Math.random().toString(36).slice(-10).toUpperCase() +
    Math.floor(Math.random() * 100);
  document.getElementById("enc-pass").value = p;
  checkStrength(p);
}

async function processData(type) {
  const text = document.getElementById(
    `${type === "encrypt" ? "enc" : "dec"}-text`,
  ).value;
  const password = document.getElementById(
    `${type === "encrypt" ? "enc" : "dec"}-pass`,
  ).value;
  const resBox = document.getElementById(
    `${type === "encrypt" ? "res-enc-box" : "res-dec-box"}`,
  );
  const resArea = document.getElementById(
    `${type === "encrypt" ? "enc" : "dec"}-result`,
  );

  if (!text || !password) return alert("Please fill all fields!");

  try {
    const r = await fetch(`${API_BASE}/${type}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, password }),
    });
    const d = await r.json();
    if (r.ok) {
      resArea.value = d.result;
      resBox.classList.remove("hidden");
      addToHistory(type, text.substring(0, 20) + "...");
    } else {
      alert("Error: " + d.error);
    }
  } catch {
    alert("Backend Server Offline!");
  }
}

function copy(id) {
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.value);
  alert("Copied to clipboard!");
}

function addToHistory(type, label) {
  const list = document.getElementById("history-list");
  const item = document.createElement("div");
  item.className =
    "bg-white p-4 rounded-2xl border border-slate-100 flex justify-between items-center text-xs animate-in fade-in zoom-in duration-300";
  item.innerHTML = `
                <div class="flex items-center space-x-3">
                    <span class="px-2 py-1 rounded-md ${type === "encrypt" ? "bg-blue-100 text-blue-600" : "bg-emerald-100 text-emerald-600"} font-bold uppercase">${type}</span>
                    <span class="text-slate-600 font-medium">${label}</span>
                </div>
                <span class="text-slate-400">${new Date().toLocaleTimeString()}</span>
            `;
  list.prepend(item);
  if (list.children.length > 5) list.lastChild.remove();
}
