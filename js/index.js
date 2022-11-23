const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const menu = document.getElementById("menu");

menuOpen.addEventListener("click", function () {
  menu.classList.add("show");
  menu.classList.remove("hide");
});
menuClose.addEventListener("click", function () {
  menu.classList.add("hide");
  menu.classList.remove("show");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    menu.classList.remove("hide");
  }
});

$(function () {
  $("#dg-container").gallery();
});
