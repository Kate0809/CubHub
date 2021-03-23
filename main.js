let today = new Date().toISOString().substr(0, 10);
document.querySelector("#today-date").value = today;



$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$('.header__menu').click(function(){
	$('.header__burger, .header__menu').removeClass('active');
	$('body').removeClass('lock');
});



window.addEventListener("scroll", function(){
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 190);
});