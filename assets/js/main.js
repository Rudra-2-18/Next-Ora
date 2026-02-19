document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const year = document.getElementById("year");
  const header = document.querySelector(".site-header");
  const pageLoader = document.getElementById("page-loader");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const open = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const toggleHeaderState = () => {
    if (!header) return;
    if (window.scrollY > 12) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  toggleHeaderState();
  window.addEventListener("scroll", toggleHeaderState, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const id = anchor.getAttribute("href");
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  initFullPageLoader(body, pageLoader);
  initRevealAnimations();
  initScrollTopButton();
});

function initFullPageLoader(body, pageLoader) {
  if (!pageLoader) {
    body.classList.remove("page-loading");
    return;
  }

  const hasSeenLoader = sessionStorage.getItem("tno_seen_loader") === "1";

  if (hasSeenLoader) {
    pageLoader.classList.add("hidden");
    body.classList.remove("page-loading");
    return;
  }

  body.classList.add("page-loading");

  const hideLoader = () => {
    pageLoader.classList.add("hidden");
    body.classList.remove("page-loading");
    sessionStorage.setItem("tno_seen_loader", "1");
  };

  window.addEventListener(
    "load",
    () => {
      setTimeout(hideLoader, 550);
    },
    { once: true }
  );
}

function initRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("reveal-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -24px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initScrollTopButton() {
  let button = document.querySelector(".scroll-top");

  if (!button) {
    button = document.createElement("button");
    button.className = "scroll-top";
    button.type = "button";
    button.setAttribute("aria-label", "Scroll to top");
    button.innerHTML = "&#8593;";
    document.body.appendChild(button);
  }

  const toggleButton = () => {
    if (window.scrollY > 420) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  };

  toggleButton();
  window.addEventListener("scroll", toggleButton, { passive: true });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
