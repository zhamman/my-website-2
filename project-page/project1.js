const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav li");
  const line2 = document.querySelector(".hamburger .line2");

  burger.addEventListener("click", () => {
    line2.classList.toggle("turn");
    burger.classList.toggle("rotate");
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, idx) => {
      link.style.animation = `navLinkFade 0.3s ease forwards ${idx / 7 + 0.3}s`;
    });
  });
};

navSlide();
