$(document).ready(function() {
	console.log('JS loaded!')
	const carousel = $('.proj-carousel');
	const showSkills = $('.show-skills');
	const modalContent = $('.skills-modal');
	const closeModal = $('.close-modal');
	//slick.js settings initialized
	carousel.slick({
		centerPadding: '0px',
		centerMode: true,
		dots: true,
	})

	//toggle view of skills modal
	showSkills.on('click', function() {
		modalContent.css({'display': 'block'});
	})
	// When the user clicks anywhere outside of the modal, close it
	$(window).on('click', function(e) {
		if(e.target == modalContent[0]) {
			modalContent[0].style.display = 'none';
		}
	})
	// When the user clicks on close in modal, close the modal
	closeModal.on('click', function() {
		modalContent[0].style.display = 'none';
	})

})