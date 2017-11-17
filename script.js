//Image array
let imgArray = [
	"images/1.jpg",
	"images/2.jpg",
	"images/3.jpg",
	"images/4.jpg",
	"images/5.jpg"
];

//Current Index
let arrayIndex = 0;

//DOM elements
const img = document.querySelector(".img-container img");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const current = document.querySelector('.current');
const totalImages = document.querySelector('.totalImages');
const overlay = document.querySelector('.overlay');
const closeBtn = document.getElementById('closeBtn');

//Starter image
function initGallery() {
	img.src = imgArray[arrayIndex];
	leftArrow.style.display = "none";
	current.innerText = arrayIndex + 1;
	totalImages.innerText = imgArray.length;
}


//Functions￼

//left arrow
function left() {
	img.style.opacity = 0;
	//Prevent spam click
	leftArrow.style.pointerEvents = 'none';
	//Timeout for fade effect
	setTimeout(function() {
		arrayIndex--;
		current.innerText = arrayIndex + 1;
		img.src = imgArray[arrayIndex];
		rightArrow.style.display = "block";
		img.style.opacity = 1;
		if(arrayIndex === 0) {
			leftArrow.style.display = "none";
		}
		leftArrow.style.pointerEvents = 'auto';
	}, 200);
}

//right arrow
function right() {
	img.style.opacity = 0;
	//Prevent spam click
	rightArrow.style.pointerEvents = 'none';
	//Timeout for fade effect
	setTimeout(function() {
		arrayIndex++;
		current.innerText = arrayIndex + 1;
		img.src = imgArray[arrayIndex];
		leftArrow.style.display = "block";
		img.style.opacity = 1;
		if(arrayIndex === imgArray.length -1) {
			rightArrow.style.display = "none";
		}
		rightArrow.style.pointerEvents = 'auto';
	}, 200);
}

//Event Handlers
leftArrow.addEventListener("click", () => {
	left();
});

rightArrow.addEventListener("click", () => {
	right();
});

//Initialize
initGallery();


//Enlarge image on click
img.addEventListener('click', function() {
	let currentImg = this.cloneNode(true);
	overlay.style.display = "block";
	overlay.appendChild(currentImg);
});

//Close image on click
closeBtn.addEventListener('click', function(e) {
	overlay.style.display = "none";
	let overlayImg = document.querySelector('.overlay img');
	overlayImg.parentNode.removeChild(overlayImg);
});

//Close image
overlay.addEventListener('click', function(e) {
	if(e.target == overlay) {
		overlay.style.display = "none";
		let overlayImg = document.querySelector('.overlay img');
		overlayImg.parentNode.removeChild(overlayImg);
	}
});