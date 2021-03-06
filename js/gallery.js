const current = document.querySelector("#current");
const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");
const opacity = 0.6;
const imageContainer = document.querySelector(".image-container");
const fullScreenImage = document.getElementById("big-image");
img[0].style.opacity = opacity;
imgs.addEventListener("click", imgClick);

function imgClick(e) {
	if (e.target.id === "prev" || e.target.id === "next") {
		return;
	} else {
		img.forEach((img) => (img.style.opacity = 1));
		fullScreenImage.setAttribute("href", e.target.src);
		current.src = e.target.src;
		current.classList.add("fade-in");
		setTimeout(() => current.classList.remove("fade-in"), 500);
		e.target.style.opacity = opacity;
	}
}
