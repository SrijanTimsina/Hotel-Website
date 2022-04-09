const slides = document.querySelectorAll(".slide");

const intervalTime = 3000;
let slideInterval;
let counter = 0;

const nextSlide = () => {
	const current = document.querySelector(".current");
	current.classList.remove("current");
	if (counter !== slides.length - 1) {
		counter++;
		slides[counter].classList.add("current");
	} else {
		counter = 0;
		slides[counter].classList.add("current");
	}
	setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
	const current = document.querySelector(".current");
	current.classList.remove("current");
	if (counter !== 0) {
		counter--;
		slides[counter].classList.add("current");
	} else {
		counter = slides.length - 1;
		slides[counter].classList.add("current");
	}
	setTimeout(() => current.classList.remove("current"));
};

slideInterval = setInterval(nextSlide, intervalTime);
