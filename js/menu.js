$('.header_burger').on('click', function(e) {
	$('.header').toggleClass('header_active');
	$('.header_logo-img').toggleClass('disabled');
	$('.header_active_logo-img').toggleClass('active');
	$(this).toggleClass('header_burger_active');
});