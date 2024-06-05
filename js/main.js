const btnOpenMenu = document.querySelector(".menu");
const btnCloseMenu = document.querySelector(".close-menu");
const navbar = document.querySelector(".navbar");

btnOpenMenu.addEventListener("click", () => {
    navbar.classList.add("active");
});

btnCloseMenu.addEventListener("click", () => {
    navbar.classList.remove("active");
})