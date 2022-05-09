let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
	if (window.pageYOffset >= 150) {
		nav.style.position = "fixed";
		nav.style.top = "0";
	} else {
		nav.style = "";
	}
});
