const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-nav a");
const yearNode = document.querySelector("#year");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (menuButton && mobileMenu) {
  const toggleMenu = () => {
    const isOpen = menuButton.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    mobileMenu.hidden = !isOpen;
  };

  menuButton.addEventListener("click", toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
      mobileMenu.hidden = true;
    });
  });
}

document.querySelector(".newsletter-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
});
