const content = document.getElementById("content");
const sidebarItems = document.querySelectorAll(".sidebar li");
// const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// 🌗 Theme toggle
// if (localStorage.getItem("theme") === "dark") {
//   body.classList.add("dark");
//   themeToggle.textContent = "☀️";
// }

// themeToggle.addEventListener("click", () => {
//   body.classList.toggle("dark");
//   const isDark = body.classList.contains("dark");
//   themeToggle.textContent = isDark ? "☀️" : "🌙";
//   localStorage.setItem("theme", isDark ? "dark" : "light");
// });

// 🧮 Topics
const topics = {
  kinematics: `
    <h1 style="font-weight: 300; background:black;opacity:0.8;text-align:center; padding:10px;border-radius:30px; display:inline-block;">Kinematics</h1>
    <div class="card">
      <h3>1️. Final Velocity Formula: v = u + a·t</h3>
      <input type="number" id="u" placeholder="Initial velocity (u) style='color:white;'">
      <input type="number" id="a" placeholder="Acceleration (a)">
      <input type="number" id="t" placeholder="Time (t)">
      <button class="calc" onclick="calcKinematics()">Calculate</button>
      <p id="resultKinematics"></p>
    </div>

    <div class="card">
      <h3>2️ .Displacement Formula: s = u·t + ½·a·t²</h3>
      <input type="number" id="u2" placeholder="Initial velocity (u)">
      <input type="number" id="a2" placeholder="Acceleration (a)">
      <input type="number" id="t2" placeholder="Time (t)">
      <button class="calc" onclick="calcDisplacement()">Calculate</button>
      <p id="resultDisplacement"></p>
    </div>
    <div class="card">
      <h3>2️ .Acceleration Formula: a = (v - u) / t</h3>
      <input type="number" id="v3" placeholder="Final velocity (v)">
      <input type="number" id="u3" placeholder="Initial velocity (u)">
      <input type="number" id="t3" placeholder="Time (t)">
      <button class="calc" onclick="calcAcceleration()">Calculate</button>
      <p id="resultAcceleration"></p>
    </div>
    <div class="card">
    <h3>3.potential Eneregy:PE =m.g.h</h3>
    <input type="number" id="m4" placeholder="mass(m)in gram">
    <input type="number" id="h4" placeholder="height in meter(h)">
    <button class="calc" onclick="potentialEnergy()">Calculate</button>
    <p id="resultPE"></p>
    </div>
  `,

  gravitation: `
    <h1 style="font-weight: 300; background:black;opacity:0.8; padding:10px;text-align:center; border-radius:30px; display:inline-block;">Gravitation</h1>
    <div class="card">
      <h3>F = G·(m₁·m₂)/r²</h3>
      <input type="number" id="m1" placeholder="Mass 1 (kg)">
      <input type="number" id="m2" placeholder="Mass 2 (kg)">
      <input type="number" id="r" placeholder="Distance (m)">
      <button class="calc" onclick="calcGravitation()">Calculate</button>
      <p id="resultGravitation"></p>
    </div>
  `,

  magnetism: `
    <h1 style="font-weight: 300; background:black;opacity:0.8;text-align:center; padding:10px; border-radius:30px; display:inline-block;">Magnetism</h1>
    <div class="card">
      <h3>F = B·I·l·sinθ</h3>
      <input type="number" id="B" placeholder="Magnetic Field (T)">
      <input type="number" id="I" placeholder="Current (A)">
      <input type="number" id="l" placeholder="Length (m)">
      <input type="number" id="theta" placeholder="Angle θ (deg)">
      <button class="calc" onclick="calcMagnetism()">Calculate</button>
      <p id="resultMagnetism"></p>
    </div>
  `,

  optics: `
    <h1 style="font-weight: 300; background:black;opacity:0.8;text-align:center;  padding:10px;border-radius:30px; display:inline-block; margin: 0 auto;">Optics</h1>
    <div class="card">
      <h3>1/f = 1/u + 1/v</h3>
      <input type="number" id="uOpt" placeholder="Object distance (u)">
      <input type="number" id="vOpt" placeholder="Image distance (v)">
      <button class="calc" onclick="calcOptics()">Calculate</button>
      <p id="resultOptics"></p>
    </div>
  `,

  thermodynamics: `
    <h1 style="font-weight: 300;  padding:10px;background:black;opacity:0.8; text-align:center; border-radius:30px; display:inline-block; margin-bottom:10px;">Thermodynamics</h1>
    <div class="card">
      <h3>Q = m·c·ΔT</h3>
      <input type="number" id="m" placeholder="Mass (kg)">
      <input type="number" id="c" placeholder="Specific heat (J/kg·K)">
      <input type="number" id="dT" placeholder="Change in Temp (K)">
      <button class="calc" onclick="calcThermo()">Calculate</button>
      <p id="resultThermo"></p>
    </div>
  `
};

// 🧭 Sidebar Clicks
sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    const topic = item.getAttribute("data-topic");
    content.innerHTML = topics[topic];
  });
});

// ✅ Calculations
function calcKinematics() {
  const u = parseFloat(document.getElementById("u").value);
  const a = parseFloat(document.getElementById("a").value);
  const t = parseFloat(document.getElementById("t").value);
  if (!isNaN(u) && !isNaN(a) && !isNaN(t)) {
    const v = u + a * t;
    document.getElementById("resultKinematics").textContent = `Final velocity (v) = ${v.toFixed(2)} m/s`;
  }
}

function calcDisplacement() {
  const u = parseFloat(document.getElementById("u2").value);
  const a = parseFloat(document.getElementById("a2").value);
  const t = parseFloat(document.getElementById("t2").value);
  if (!isNaN(u) && !isNaN(a) && !isNaN(t)) {
    const s = u * t + 0.5 * a * t * t;
    document.getElementById("resultDisplacement").textContent = `Displacement (s) = ${s.toFixed(2)} m`;
  }
}
function calcAcceleration() {
  const u = parseFloat(document.getElementById("u3").value);
  const v = parseFloat(document.getElementById("v3").value);
  const t = parseFloat(document.getElementById("t3").value);

  if (!isNaN(u) && !isNaN(v) && !isNaN(t) && t !== 0) {
    const a = (v - u) / t;
    document.getElementById("resultAcceleration").textContent = `Acceleration (a) = ${a.toFixed(2)} m/s²`;
  }
}
function potentialEnergy(){
  const m=parseFloat(document.getElementById("m4").value);
  const g=9.81;
  const h=parseFloat(document.getElementById("h4").value);
  if(!isNaN(m) && !isNaN(h)){
    const PE=m*g*h;
    document.getElementById("resultPE").textContent=`Potential energy (PE) = ${PE.toFixed(2)} J`;
  }
}
function kineticEnergy(){
  const m=parseFloat(document.getElementBy)
}
function calcGravitation() {
  const G = 6.674e-11;
  const m1 = parseFloat(document.getElementById("m1").value);
  const m2 = parseFloat(document.getElementById("m2").value);
  const r = parseFloat(document.getElementById("r").value);
  if (!isNaN(m1) && !isNaN(m2) && !isNaN(r)) {
    const F = (G * m1 * m2) / (r * r);
    document.getElementById("resultGravitation").textContent = `Force (F) = ${F.toExponential(3)} N`;
  }
}

function calcMagnetism() {
  const B = parseFloat(document.getElementById("B").value);
  const I = parseFloat(document.getElementById("I").value);
  const l = parseFloat(document.getElementById("l").value);
  const theta = (parseFloat(document.getElementById("theta").value) * Math.PI) / 180;
  if (!isNaN(B) && !isNaN(I) && !isNaN(l) && !isNaN(theta)) {
    const F = B * I * l * Math.sin(theta);
    document.getElementById("resultMagnetism").textContent = `Force (F) = ${F.toFixed(4)} N`;
  }
}

function calcOptics() {
  const u = parseFloat(document.getElementById("uOpt").value);
  const v = parseFloat(document.getElementById("vOpt").value);
  if (!isNaN(u) && !isNaN(v)) {
    const f = 1 / ((1 / u) + (1 / v));
    document.getElementById("resultOptics").textContent = `Focal length (f) = ${f.toFixed(2)} cm`;
  }
}

function calcThermo() {
  const m = parseFloat(document.getElementById("m").value);
  const c = parseFloat(document.getElementById("c").value);
  const dT = parseFloat(document.getElementById("dT").value);
  if (!isNaN(m) && !isNaN(c) && !isNaN(dT)) {
    const Q = m * c * dT;
    document.getElementById("resultThermo").textContent = `Heat (Q) = ${Q.toFixed(2)} J`;
  }
}
