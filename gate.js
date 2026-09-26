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

  var style = document.createElement("style");
  style.textContent =
    'html.bb-locked,body.bb-locked{overflow:hidden!important}' +
    '#bb-gate{position:fixed;inset:0;z-index:2147483647;background:#ffffff;' +
    'display:flex;align-items:center;justify-content:center;padding:16px;' +
    "font-family:'Geist',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#0d0d0d;" +
    '-webkit-font-smoothing:antialiased}' +
    '#bb-gate .bb-box{width:100%;max-width:400px;padding:40px;border-radius:5px;background:#f4f4f6}' +
    '#bb-gate .bb-kicker{font-size:14px;color:#6e6e80;display:block;margin:0 0 8px}' +
    '#bb-gate h1{font-size:32px;font-weight:600;letter-spacing:-.02em;margin:0 0 4px;line-height:1.2}' +
    '#bb-gate p{font-size:16px;color:#5d5d6b;margin:0 0 24px;line-height:1.5}' +
    '#bb-gate .bb-sub{font-size:14px;color:#6e6e80;margin:0 0 24px}' +
    '#bb-gate input{width:100%;min-height:44px;padding:0 16px;border:1px solid #e5e5ea;border-radius:5px;' +
    'font-size:16px;margin:0 0 8px;background:#ffffff;color:#0d0d0d;box-sizing:border-box;font-family:inherit;' +
    'transition:border-color 400ms ease}' +
    '#bb-gate input:focus{outline:none;border-color:#0d0d0d}' +
    '#bb-gate button{width:100%;min-height:44px;background:#0d0d0d;color:#ffffff;border:none;border-radius:999px;' +
    "font-family:inherit;font-size:14px;font-weight:500;cursor:pointer;transition:opacity 400ms ease}" +
    '#bb-gate button:hover{opacity:.8}' +
    '#bb-gate button:focus-visible{outline:2px solid #0d0d0d;outline-offset:2px}' +
    '#bb-gate .bb-err{display:none;color:#b42318;font-size:14px;margin-top:16px}' +
    '#bb-gate.bad .bb-err{display:block}' +
    '#bb-gate.bad input{border-color:#b42318}' +
    '#bb-gate .bb-ask{font-size:14px;color:#6e6e80;margin:24px 0 0}' +
    '#bb-gate .bb-ask a{color:#0d0d0d;text-decoration:underline;text-decoration-color:#8e8ea0;text-underline-offset:4px}' +
    '@media (prefers-reduced-motion:reduce){#bb-gate *{transition:none!important}}';
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
