$(document).ready(function()
{

	var navbar = $('.navbar-default');
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');


		}
	});

	$('button#floatDown').click(function(){
		// Scroll to a certain element
		document.querySelector('.paddMeTop').scrollIntoView({ 
		  behavior: 'smooth' 
		});
	});
})


