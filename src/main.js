const menuT = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuT.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});