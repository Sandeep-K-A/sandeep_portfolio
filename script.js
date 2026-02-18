const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isExpanded));
});

const sections = document.querySelectorAll(".reveal-section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const reveals = entry.target.querySelectorAll(".reveal");

      reveals.forEach((el, index) => {
        el.style.transitionDelay = `${index * 120}ms`;
        el.classList.add("is-visible");
      });

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.25,
  },
);

sections.forEach((section) => observer.observe(section));
