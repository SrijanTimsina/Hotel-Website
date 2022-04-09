const navbarButton = document.getElementById("navbar-show");
const navbar = document.getElementById("navbar");

navbarButton.addEventListener("click", () => {
	navbar.classList.toggle("long-navbar");
});
