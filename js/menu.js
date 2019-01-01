$('.header_burger').on('click', function(e) {
	$('.header').toggleClass('header_active');
	$('.header_logo-img').toggleClass('disabled');
	$('.header_active_logo-img').toggleClass('active');
	$(this).toggleClass('header_burger_active');
});

$('.footer-mobile_allPages-openGroup').on('click', function() {
	$(this).toggleClass('footer-mobile_allPages-openGroup_active');
	$('.footer-mobile_allPages-links').toggleClass('active');
})

$('.footer-mobile_information-openGroup').on('click', function() {
	$(this).toggleClass('footer-mobile_information-openGroup_active');
	$('.footer-mobile_information-links').toggleClass('active');
})

$('.footer-mobile_socials-openGroup').on('click', function() {
	$(this).toggleClass('footer-mobile_socials-openGroup_active');
	$('.footer-mobile_socials-links').toggleClass('active');
})