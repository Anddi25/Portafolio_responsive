document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const closeBtn = document.getElementById("close-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuLinks = document.querySelectorAll(".menu-link");
  
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
    });
  
    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  
    menuLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
        mobileMenu.classList.add("hidden");
      });
    });
  });
  