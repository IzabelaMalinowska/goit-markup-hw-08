/*const menuOverlay = document.querySelector(".mobile-menu");
const closeMenuButton = document.querySelector(".mobile-menu__close");
const openMenuBtn = document.querySelector(".mobile-menu__open");

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("d-none");
});

closeMenuButton.addEventListener("click", (e) => {
  menuOverlay.classList.add("d-none");
});*/

(() => {
  const menuOpenBtn = document.querySelector("[data-menu-open]");
  const menuCloseBtn = document.querySelector("[data-menu-close]");

  const mobileMenu = document.querySelector("[data-menu]");
  // const body = document.querySelector('body');

  menuOpenBtn.addEventListener("click", openModal);
  menuCloseBtn.addEventListener("click", openModal);

  function openModal() {
    mobileMenu.classList.toggle("is-open");
    // body.classList.toggle('no-scroll');
  }
})();
