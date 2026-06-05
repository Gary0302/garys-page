;(function () {
  if (document.getElementById("notes-back-nav")) return

  const style = document.createElement("style")
  style.textContent = `
    #notes-back-nav {
      position: fixed;
      top: 1rem;
      left: 1rem;
      z-index: 9999;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.45rem 0.85rem;
      border-radius: 9999px;
      font: 500 0.8125rem/1 system-ui, -apple-system, sans-serif;
      text-decoration: none;
      color: #137fec;
      background: rgba(255, 255, 255, 0.92);
      border: 1px solid rgba(19, 127, 236, 0.25);
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
      backdrop-filter: blur(8px);
      transition: background 0.15s, box-shadow 0.15s;
    }
    #notes-back-nav:hover {
      background: #fff;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
    }
    @media (prefers-color-scheme: dark) {
      #notes-back-nav {
        color: #5eb0ff;
        background: rgba(16, 25, 34, 0.92);
        border-color: rgba(94, 176, 255, 0.3);
      }
      #notes-back-nav:hover { background: rgba(22, 32, 42, 0.98); }
    }
  `
  document.head.appendChild(style)

  const link = document.createElement("a")
  link.id = "notes-back-nav"
  link.href = "/notes"
  link.setAttribute("aria-label", "Back to notes list")
  link.textContent = "← Notes"
  document.body.appendChild(link)
})()
