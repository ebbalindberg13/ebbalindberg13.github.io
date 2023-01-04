console.log("I'm aliiiive");

var projectGrid = document.getElementById("projectGrid");
//var projectGridInfo = projectGrid.getBoundingClientRect();

var purpleWhenScrolling = function() {
	if(230 >= window.scrollY && window.scrollY > 200) {
		console.log("hi");
		document.documentElement.style
			.setProperty('--main-color', '#feb44c');
	} 

	else if ( 260 >= window.scrollY && window.scrollY > 231) {
		document.documentElement.style
			.setProperty('--main-color', '#fdc068');
	}

	else if ( 290 >= window.scrollY && window.scrollY > 261) {
		document.documentElement.style
			.setProperty('--main-color', '#fccb85');
	}

	else if ( 320 >= window.scrollY && window.scrollY > 291) {
		document.documentElement.style
			.setProperty('--main-color', '#fbd6a1');
	}

	else if ( 350 >= window.scrollY && window.scrollY > 321) {
		document.documentElement.style
			.setProperty('--main-color', '#fae1bd');
	}

	else if ( 380 >= window.scrollY && window.scrollY > 351) {
		document.documentElement.style
			.setProperty('--main-color', '#faecd9');
	}

	else if (window.scrollY > 291) {
		document.documentElement.style
			.setProperty('--main-color', ' #f9f4ec');
	}

	else {
		document.documentElement.style
			.setProperty('--main-color', '#ffa930')
	}
}
 
window.addEventListener("scroll", purpleWhenScrolling);

var sideNavLinks = document.querySelectorAll(".sideNav div");
var section = document.querySelectorAll("section");

function activeSideNav() {
	let length = section.length;
	while(--length && window.scrollY < section[length].getBoundingClientRect().y + window.scrollY) {
		sideNavLinks.forEach(item => item.classList.remove("active"));
		sideNavLinks[(length - 1)].classList.add("active");
	}

	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
			sideNavLinks.forEach(item => item.classList.remove("active"));
			sideNavLinks[(length + 1)].classList.add("active");
			console.log('eeey?');
		}
}
activeSideNav();
window.addEventListener("scroll", activeSideNav);

const array = section;
array.forEach(function (item, index) {
  sideNavLinks[index].addEventListener('click', function() {
  	let sectionCoord = item.getBoundingClientRect().y;
  	let offset = 60;
  	let n = sectionCoord + window.scrollY - offset;
  	console.log(sectionCoord);
  	window.scrollTo(0,n);
  })
});


var progressBar = document.querySelector('.progressBar');
var windowView = document.querySelector('.projectInfo');

function animateProgressBar() {
	let scroll = windowView.getBoundingClientRect().top;
	let scrollPercentage = (scroll / - (windowView.getBoundingClientRect().height - window.innerHeight - document.querySelector('.footer').getBoundingClientRect().height)) * 100;
	let scrollInt = Math.floor(scrollPercentage);
	progressBar.style.width = scrollInt + "%"

}
window.addEventListener("scroll", animateProgressBar);