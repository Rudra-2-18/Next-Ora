document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("packages-container");
  const loader = document.getElementById("packages-loader");

  if (!container) return;

  try {
    const response = await fetch("data/packages.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to fetch packages");

    const groups = await response.json();

    container.innerHTML = groups
      .map((group, groupIndex) => {
        const cards = group.plans
          .map((plan, planIndex) => {
            const features = plan.features.map((item) => `<li>${item}</li>`).join("");
            const message = encodeURIComponent(
              `Hi The Next Ora, I am interested in ${group.category} - ${plan.name}.`
            );

            const badgeClass =
              typeof plan.badge === "string" && plan.badge.toLowerCase().includes("most")
                ? "package-tag strong"
                : "package-tag";

            return `
              <article class="card card-hover reveal" style="transition-delay:${(groupIndex * 70) + (planIndex * 70)}ms;">
                ${plan.badge ? `<span class="${badgeClass}">${plan.badge}</span>` : ""}
                <h3>${plan.name}</h3>
                <p class="price">${plan.price}</p>
                <p><strong>Support:</strong> ${plan.support_period}</p>
                <p class="best-for"><strong>Best for:</strong> ${plan.best_for}</p>
                <ul class="bullet-list">${features}</ul>
                <a class="btn btn-outline" href="https://wa.me/919313495498?text=${message}" target="_blank" rel="noopener">Enquire on WhatsApp</a>
              </article>
            `;
          })
          .join("");

        return `
          <section class="package-group">
            ${group.highlight ? '<span class="package-tag">BEST VALUE</span>' : ""}
            <h2 class="reveal">${group.category}</h2>
            <p class="reveal">${group.description || ""}</p>
            <div class="package-cards">${cards}</div>
          </section>
        `;
      })
      .join("");

    const revealItems = container.querySelectorAll(".reveal");
    observeDynamicReveal(revealItems);
    animatePrices(container.querySelectorAll(".price"));
  } catch (error) {
    container.innerHTML = `
      <article class="card reveal reveal-visible">
        <h2>Pricing temporarily unavailable</h2>
        <p>Please contact us on <a href="tel:+919313495498">+91 9313495498</a> for current plans.</p>
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

function animatePrices(prices) {
  prices.forEach((price, index) => {
    setTimeout(() => {
      price.classList.add("price-visible");
    }, 120 + index * 110);
  });
}
