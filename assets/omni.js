/* ==========================================================================
   OMNI — shared behaviour.
   Tabs switch the panel in place. They do not scroll: the content under the
   tab bar is replaced, so only one section is ever in the document flow.
   Markup contract:
     <div class="tabs"><button data-panel="about">About</button>…</div>
     <section id="about">…</section>
   The hash stays in sync so a link like page.html#leaderboard still opens
   the right panel, and Back works.
   ========================================================================== */
(function () {
  "use strict";

  function initTabs() {
    const bar = document.querySelector(".tabs");
    if (!bar) return;
    const tabs = [...bar.querySelectorAll("[data-panel]")];
    if (!tabs.length) return;

    bar.setAttribute("role", "tablist");
    tabs.forEach(t => {
      t.setAttribute("role", "tab");
      if (!t.id) t.id = "tab-" + t.dataset.panel;
      const p = document.getElementById(t.dataset.panel);
      if (p) {
        p.setAttribute("role", "tabpanel");
        p.setAttribute("aria-labelledby", t.id);
        if (!p.hasAttribute("tabindex")) p.tabIndex = 0;
      }
    });

    const seen = new Set();

    function select(name, opts) {
      opts = opts || {};
      if (!tabs.some(t => t.dataset.panel === name)) return false;
      tabs.forEach(t => {
        const on = t.dataset.panel === name;
        t.classList.toggle("active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        const p = document.getElementById(t.dataset.panel);
        if (p) p.hidden = !on;
      });
      if (!seen.has(name)) {
        seen.add(name);
        // charts and anything else that needs a laid-out box get a chance here
        document.dispatchEvent(new CustomEvent("omni:panel", { detail: { panel: name } }));
      }
      if (opts.push !== false && location.hash.slice(1) !== name) {
        history.replaceState(null, "", "#" + name);
      }
      if (opts.focus) {
        const t = tabs.find(x => x.dataset.panel === name);
        if (t) t.focus();
      }
      return true;
    }

    /* A tab never scrolls the page down. But if the reader is already deep
       inside a long panel, switching leaves them stranded in the middle of a
       shorter one — so we only ever scroll UP, just far enough to put the new
       panel's first line under the sticky bar. At the top of the page this is
       a no-op, which is the common case. */
    function align(name) {
      const p = document.getElementById(name);
      if (!p) return;
      const stick = parseFloat(getComputedStyle(bar).top) || 0;
      const want = stick + bar.getBoundingClientRect().height;
      const top = p.getBoundingClientRect().top;
      if (top < want - 1) window.scrollTo(0, Math.max(0, scrollY + top - want));
    }

    bar.addEventListener("click", e => {
      const t = e.target.closest("[data-panel]");
      if (!t) return;
      e.preventDefault();
      select(t.dataset.panel);
      align(t.dataset.panel);
    });

    bar.addEventListener("keydown", e => {
      const i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      let j = null;
      if (e.key === "ArrowRight") j = (i + 1) % tabs.length;
      else if (e.key === "ArrowLeft") j = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") j = 0;
      else if (e.key === "End") j = tabs.length - 1;
      if (j === null) return;
      e.preventDefault();
      select(tabs[j].dataset.panel, { focus: true });
    });

    // in-page links that point at a panel should switch to it, not jump
    document.addEventListener("click", e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a || bar.contains(a)) return;
      const name = a.getAttribute("href").slice(1);
      if (!tabs.some(t => t.dataset.panel === name)) return;
      e.preventDefault();
      select(name);
      align(name);
    });

    addEventListener("hashchange", () => select(location.hash.slice(1), { push: false }));

    if (!select(location.hash.slice(1), { push: false })) {
      select(tabs[0].dataset.panel, { push: false });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTabs);
  } else {
    initTabs();
  }
})();
