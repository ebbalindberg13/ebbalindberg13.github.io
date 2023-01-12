
var projectGrid = document.getElementById("projectGrid");

var sideNavLinks = document.querySelectorAll(".sideNav div");
var section = document.querySelectorAll("section");

var cards = document.querySelectorAll(".gridItem");

const observer = new IntersectionObserver(
	cards => {
		cards.forEach(card => {
			card.target.classList.toggle("visible", card.isIntersecting)
			if (card.isIntersecting) observer.unobserve(card.target)
		})
	},
	{
		threshold: 0.3,
	}
	)

cards.forEach(card => {
	observer.observe(card);
})

var hamburgerMenu = document.querySelector('.hamburgerMenu');
var navBar = document.querySelector('.navBar');
var menuitems = document.querySelectorAll('.menuitem');
var listMenu = document.querySelector('.listMenu');

hamburgerMenu.addEventListener('click', function () {
	hamburgerMenu.classList.toggle("active");
	navBar.classList.toggle("a");
	menuitems.forEach(item => {
	item.classList.toggle("b");
})
	listMenu.classList.toggle("v");
	console.log('hir')

});

menuitems.forEach(item => {
	item.addEventListener('click', function() {
		menuitems.forEach(item => {
	item.classList.remove("b");
		hamburgerMenu.classList.remove("active");
		listMenu.classList.remove("v");
	navBar.classList.remove("a");
	})
})

})
