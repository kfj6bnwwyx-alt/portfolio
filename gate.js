/* ============================================================
   SIMPLE PASSWORD GATE
   Soft, client-side only. Deters casual visitors; it is NOT
   real security (source is viewable / JS can be disabled).
   Password: letmein  — unlock persists for the browser session.
   ============================================================ */
(function () {
  var KEY = "bb_gate_ok";
  var PASSWORD = "letmein";

  try {
    if (sessionStorage.getItem(KEY) === "1") return;
  } catch (e) { /* sessionStorage unavailable — still show gate */ }

  // Warm the brand font before the gate paints. A pre-paint gate can't fully
  // guarantee no swap, but preconnect + preload makes the fallback flash
  // negligible instead of a visible reflow.
  var head = document.head || document.documentElement;
  [["preconnect", "https://fonts.googleapis.com", false],
   ["preconnect", "https://fonts.gstatic.com", true]].forEach(function (p) {
    var l = document.createElement("link");
    l.rel = p[0]; l.href = p[1]; if (p[2]) l.crossOrigin = "anonymous";
    head.appendChild(l);
  });
  var pre = document.createElement("link");
  pre.rel = "preload"; pre.as = "style";
  pre.href = "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..700&display=swap";
  head.appendChild(pre);

  var style = document.createElement("style");
  style.textContent =
    'html.bb-locked,body.bb-locked{overflow:hidden!important}' +
    '#bb-gate{position:fixed;inset:0;z-index:2147483647;background:#f3f3f1;' +
    'display:flex;align-items:center;justify-content:center;' +
    "font-family:'Bricolage Grotesque',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#15161a}" +
    '#bb-gate .bb-box{width:100%;max-width:392px;padding:44px;border:1px solid #d4d4cf;background:#f3f3f1}' +
    '#bb-gate .bb-kicker{font-size:13px;font-weight:600;color:#6b6a64;display:block;margin:0 0 14px}' +
    '#bb-gate h1{font-size:38px;font-weight:600;letter-spacing:-.025em;margin:0 0 6px;line-height:1.02}' +
    '#bb-gate p{font-size:15px;color:#2e2f33;margin:0 0 28px;line-height:1.55}' +
    '#bb-gate .bb-sub{font-size:15px;font-weight:600;color:#15161a;margin:0 0 22px}' +
    '#bb-gate input{width:100%;padding:13px 14px;border:1px solid #d4d4cf;border-radius:0;' +
    'font-size:15px;margin:0 0 12px;background:#faf9f6;box-sizing:border-box;font-family:inherit}' +
    '#bb-gate input:focus{outline:none;border-color:#8a2a1f}' +
    '#bb-gate button{width:100%;padding:14px;background:#8a2a1f;color:#f3f3f1;border:none;border-radius:0;' +
    "font-family:inherit;font-size:15px;font-weight:600;letter-spacing:0;cursor:pointer;transition:background 160ms ease}" +
    '#bb-gate button:hover{background:#6f2018}' +
    '#bb-gate button:focus-visible{outline:2px solid #8a2a1f;outline-offset:2px}' +
    '#bb-gate .bb-err{display:none;color:#6f2018;font-size:13px;margin-top:14px}' +
    '#bb-gate.bad .bb-err{display:block}' +
    '#bb-gate .bb-ask{font-size:13px;color:#6b6a64;margin:18px 0 0}' +
    '#bb-gate .bb-ask a{color:#8a2a1f;text-decoration:underline;text-underline-offset:3px}';
  (document.head || document.documentElement).appendChild(style);

  function build() {
    if (document.getElementById("bb-gate")) return;
    var ov = document.createElement("div");
    ov.id = "bb-gate";
    ov.setAttribute("role", "dialog");
    ov.setAttribute("aria-modal", "true");
    ov.setAttribute("aria-labelledby", "bb-gate-title");
    ov.innerHTML =
      '<form class="bb-box" autocomplete="off">' +
      '<span class="bb-kicker">Private</span>' +
      '<h1 id="bb-gate-title">Brent Brooks</h1>' +
      '<p class="bb-sub">Designer and Design Leader, New York</p>' +
      "<p>This portfolio is private. Enter the password to continue.</p>" +
      '<input type="password" id="bb-gate-input" placeholder="Password" aria-label="Password" autocomplete="off" aria-describedby="bb-gate-err">' +
      '<button type="submit">Enter</button>' +
      '<div class="bb-err" id="bb-gate-err" role="alert">That password is not right. Please try again.</div>' +
      '<p class="bb-ask">No password? <a href="mailto:me@brentbrooks.com?subject=Portfolio%20access%20request">Request access</a>.</p>' +
      "</form>";
    (document.body || document.documentElement).appendChild(ov);
    document.documentElement.classList.add("bb-locked");
    if (document.body) document.body.classList.add("bb-locked");
    var input = ov.querySelector("#bb-gate-input");
    var btn = ov.querySelector("button");
    input.focus();

    // keep keyboard focus inside the gate while it is open
    ov.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var first = input, last = btn;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    });
    input.addEventListener("input", function () {
      ov.classList.remove("bad");
      input.removeAttribute("aria-invalid");
    });

    ov.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
      if (input.value === PASSWORD) {
        try { sessionStorage.setItem(KEY, "1"); } catch (e2) {}
        if (ov.parentNode) ov.parentNode.removeChild(ov);
        document.documentElement.classList.remove("bb-locked");
        if (document.body) document.body.classList.remove("bb-locked");
        var m = document.getElementById("main");
        if (m) { m.setAttribute("tabindex", "-1"); m.focus(); }
      } else {
        ov.classList.add("bad");
        input.setAttribute("aria-invalid", "true");
        input.value = "";
        input.focus();
      }
    });
  }

  document.documentElement.classList.add("bb-locked");
  if (document.body) {
    build();
  } else {
    document.addEventListener("DOMContentLoaded", build);
  }
})();
