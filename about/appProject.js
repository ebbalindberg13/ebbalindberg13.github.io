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