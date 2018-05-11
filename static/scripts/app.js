$(document).ready(function() {
	console.log('JS loaded!')
	const carousel = $('.proj-carousel');
	
	carousel.slick({
		centerPadding: '0px',
		centerMode: true,
		dots: true,
	})
})