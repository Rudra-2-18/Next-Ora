document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("services-container");
  const loader = document.getElementById("services-loader");

  if (!container) return;

  const iconMap = {
    Website: "WD",
    Instagram: "IG",
    WhatsApp: "WA",
  };

  try {
    const response = await fetch("data/services.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to fetch services");

    const services = await response.json();

    container.innerHTML = services
      .map((service, index) => {
        const icon = iconMap[service.icon] || "SV";
        const whatYouGet = (service.what_you_get || [])
          .map((item) => `<li>${item}</li>`)
          .join("");

        const keyBenefits = (service.key_benefits || [])
          .map((item) => `<li>${item}</li>`)
          .join("");

        const msg = encodeURIComponent(
          `Hi The Next Ora, I want to enquire about ${service.title}.`
        );

        return `
          <article class="card card-hover reveal" style="transition-delay:${index * 80}ms;">
            <span class="icon" aria-hidden="true">${icon}</span>
            <h2>${service.title}</h2>
            <p><strong>Overview:</strong> ${service.description}</p>
            <p><strong>Why this matters:</strong> ${service.why_matters}</p>
            <p><strong>Who it is for:</strong> ${service.who_its_for}</p>
            <h3>What You Get</h3>
            <ul class="bullet-list">${whatYouGet}</ul>
            <h3>Key Benefits</h3>
            <ul class="bullet-list">${keyBenefits}</ul>
            <a class="btn btn-outline" href="https://wa.me/919313495498?text=${msg}" target="_blank" rel="noopener">Enquire on WhatsApp</a>
          </article>
        `;
      })
      .join("");

    observeDynamicReveal(container.querySelectorAll(".reveal"));
  } catch (error) {
    container.innerHTML = `
      <article class="card reveal reveal-visible">
        <h2>Services temporarily unavailable</h2>
        <p>Please call <a href="tel:+919313495498">+91 9313495498</a> or email <a href="mailto:patelrudra9313@gmail.com">patelrudra9313@gmail.com</a>.</p>
      </article>
    `;
  } finally {
    if (loader) loader.hidden = true;
  }
});

function observeDynamicReveal(elements) {
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("reveal-visible"));
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

  elements.forEach((element) => observer.observe(element));
}
