document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initHeroTabs();
  initDocsNav();
  initCodeCopy();
  initLightbox();
});

function initTheme() {
  const savedTheme = localStorage.getItem("ilc_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  setTheme(initialTheme);

  const toggleBtn = document.getElementById("btn-theme-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("ilc_theme", theme);

  const iconLight = document.getElementById("theme-icon-light");
  const iconDark = document.getElementById("theme-icon-dark");

  if (iconLight && iconDark) {
    if (theme === "dark") {
      iconLight.style.display = "block";
      iconDark.style.display = "none";
    } else {
      iconLight.style.display = "none";
      iconDark.style.display = "block";
    }
  }
}

function initLanguage() {
  const savedLang = localStorage.getItem("ilc_lang");
  const browserLang = navigator.language && navigator.language.startsWith("es") ? "es" : "en";
  const initialLang = savedLang || browserLang;

  applyTranslations(initialLang);

  const langBtn = document.getElementById("btn-lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const currentLang = localStorage.getItem("ilc_lang") || "en";
      const nextLang = currentLang === "en" ? "es" : "en";
      applyTranslations(nextLang);
    });
  }
}

function initHeroTabs() {
  const tabs = document.querySelectorAll(".segment-item, .window-tab");
  const medias = document.querySelectorAll(".stage-img, .mockup-media");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const targetId = tab.getAttribute("data-tab");
      medias.forEach((m) => {
        if (m.getAttribute("data-media") === targetId) {
          m.classList.add("active");
        } else {
          m.classList.remove("active");
        }
      });
    });
  });
}

function initDocsNav() {
  const navBtns = document.querySelectorAll(".docs-link-btn, .docs-nav-btn");
  const panes = document.querySelectorAll(".doc-pane");

  navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      navBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const targetPane = btn.getAttribute("data-doc-target");
      panes.forEach((pane) => {
        if (pane.id === targetPane) {
          pane.classList.add("active");
        } else {
          pane.classList.remove("active");
        }
      });
    });
  });
}

function initCodeCopy() {
  const copyButtons = document.querySelectorAll(".copy-snippet-btn, .btn-copy");

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const parentBlock = btn.closest(".code-box, .code-block-wrapper");
      if (!parentBlock) return;

      const codeElement = parentBlock.querySelector("code") || parentBlock.querySelector("pre");
      if (!codeElement) return;

      const textToCopy = codeElement.innerText.trim();
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.innerHTML;
        const currentLang = localStorage.getItem("ilc_lang") || "en";
        const feedback = currentLang === "es" ? "✓ Copiado" : "✓ Copied";

        btn.textContent = feedback;
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      });
    });
  });
}

function initLightbox() {
  const overlay = document.getElementById("lightbox");
  const lightboxImg = overlay.querySelector(".lightbox-img");
  const title = overlay.querySelector(".lightbox-title");
  const desc = overlay.querySelector(".lightbox-desc");
  const closeBtn = overlay.querySelector(".lightbox-close");

  document.querySelectorAll(".card-item").forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector(".card-thumb");
      const cardTitle = card.querySelector("h3");
      const cardDesc = card.querySelector(".card-content p");
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        title.textContent = cardTitle ? cardTitle.textContent : "";
        desc.textContent = cardDesc ? cardDesc.textContent : "";
        overlay.classList.add("active");
      }
    });
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
  });
}
