let menuHamb = document.querySelector(".menu-hamb"),
    menu = document.querySelector(".menu"),
    header = document.querySelector(".header");

menuHamb.addEventListener("click", () => {
  menu.classList.toggle("active-menu");
  menuHamb.classList.toggle("active-menu-hamb");
  header.classList.toggle("active-header");
});