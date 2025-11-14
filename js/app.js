document.addEventListener("DOMContentLoaded", () => {
  /* ====== burger====== */
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });
  }

  /* ====== lightbox ====== */
  let overlay = document.getElementById("lightbox");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "lightbox";
    overlay.className = "lightbox";
    overlay.innerHTML = `
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <img class="lightbox-img" alt="" />
    `;
    document.body.appendChild(overlay);
  }
  const overlayImg = overlay.querySelector(".lightbox-img");
  const closeBtn = overlay.querySelector(".lightbox-close");
  document.querySelectorAll(".work-figure img, .work-card img").forEach(img => {
    img.addEventListener("click", () => {
      overlayImg.src = img.getAttribute("data-full") || img.src;
      overlayImg.alt = img.alt || "";
      overlay.classList.add("open");
    });
  });
  function closeLightbox() {
    overlay.classList.remove("open");
    overlayImg.src = ""; overlayImg.alt = "";
  }
  closeBtn.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeLightbox(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

  /* ====== lazy-load clients ====== */
  const list = document.querySelector(".clients-list");
  const lazyClients = Array.from(document.querySelectorAll(".lazy-client"));
  if (!lazyClients.length) return;

  const hydrate = (el) => {
    el.textContent = el.getAttribute("data-text") || "";
    el.classList.remove("lazy-client");
  };

  const hydrateVisibleNow = () => {
    document.querySelectorAll(".lazy-client").forEach(li => {
      const rect = li.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) {
        hydrate(li);
      }
    });
  };

  const fillAllIfShort = () => {
    if (!list) return;
    const listRect = list.getBoundingClientRect();
    if (listRect.height <= window.innerHeight) {
      document.querySelectorAll(".lazy-client").forEach(hydrate);
    }
  };

  hydrateVisibleNow();
  fillAllIfShort();

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          hydrate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "200px 0px", threshold: 0.01 });

    document.querySelectorAll(".lazy-client").forEach(li => io.observe(li));
    setTimeout(() => { hydrateVisibleNow(); fillAllIfShort(); }, 100);
  } else {
    document.querySelectorAll(".lazy-client").forEach(hydrate);
  }
});
