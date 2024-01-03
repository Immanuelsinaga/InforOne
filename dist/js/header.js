// Navbar line
const navbar = document.querySelector("#navbar");
const menu = document.querySelector("#menu");

navbar.addEventListener("click", function () {
	navbar.classList.toggle("navbar-active");
	menu.classList.toggle("hidden");
});

// Navbar fixed
window.onscroll = function () {
	const header = document.querySelector("header");
	const fixedNav = header.offsetTop;

	if (window.pageYOffset > fixedNav) {
		header.classList.add("navbar-fixed");
	} else {
		header.classList.remove("navbar-fixed");
	}
};

// Dark Mode
const darkToggle = document.querySelector("#darkmode");
const html = document.querySelector("html");
