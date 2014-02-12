$(window).load(function() {
	var chars = 0;
	$('.footer .nav li').each(function() {
		chars = chars + $(this).width();
	});
	var size = $('.footer .nav li').size() - 1;
	var free = Math.floor ( ( 960 - chars ) / size );
	$('.footer .nav li').css({'margin-right': free + 'px'});
	$('.footer .nav li:last-child').css({'margin': '0'});
	var margin = Math.floor ( ((960 - chars) - (free * size)) / 2 );
	$('.footer .nav li:first-child').css({'margin-left': margin + 'px'});
});
$(document).ready(function() {
	$('.popup').append('<button class="close"></div>');
	$('.top .login li a.enter').click(function() {
		$('.popup.login').css({'top': '53px', 'bottom': 'auto', 'margin-right': '-94px'});
		$('.popup.login, .fade').fadeIn(150);
		return false;
	});
	$('.footer .login li a.enter').click(function() {
		$('.popup.login').css({'top': 'auto', 'bottom': '140px', 'margin-right': '-481px'});
		$('.popup.login, .fade').fadeIn(150);
		return false;
	});
	$('.top button.call').click(function() {
		$('.popup.call, .fade').fadeIn(150);
		return false;
	});
	$('button.close').click(function() {
		$(this).parent().fadeOut(150);
		$('.fade').fadeOut(150);
	});
	$(this).keydown(function(eventObject){
        if (eventObject.which == 27)
        $('.popup, .fade').fadeOut(150);
    });
	$('input[type="checkbox"], select').uniform();
	$('.carousel-type1, .carousel-type2').jcarousel({
		scroll: 1,
		animation: 500,
		easing: 'easeInOutQuart'
	});
	$('.menu > li').hover(
		function() {
			$(this).find('span').addClass('animate');
		},
		function() {
			$(this).find('span').removeClass('animate');
		}
	);
	$('.zoom').jqzoom({
		zoomWidth: 401,
		zoomHeight: 349,
		xOffset: 18,
		yOffset: -18,
		title: false
	});
	$('.carousel-type1 .jcarousel-item, .rb .catalog li, .rb .list li, .rb .same li, .rb .compare li').append('<em class="passive"></em>');
	$('.carousel-type1 .jcarousel-item, .rb .catalog li, .rb .list li, .rb .same li, .rb .compare li').append('<em class="active"></em>');
	$('.about .review ul').append('<span></span>');
	$('.carousel-type1 .jcarousel-item, .rb .catalog li, .rb .list li, .rb .same li, .rb .compare li').hover(
		function() {
			$(this).find('em.passive').fadeOut(0);
			$(this).find('em.active').fadeIn(0);
		},
		function() {
			$(this).find('em.active').fadeOut(0);
			$(this).find('em.passive').fadeIn(0);
		}
	);
	$('.about .brand ul li a, .lb .brand ul li a').hover(
		function() {
			$(this).stop(true, true).animate({'opacity': '1', 'filter': 'alpha(opacity=100)'}, 500);
		},
		function() {
			$(this).stop(true, true).animate({'opacity': '0.2', 'filter': 'alpha(opacity=20)'}, 250);
		}
	);
	/*
	$('.intro .propose1').fadeIn(1500);
	$('.intro .propose2').delay(750).fadeIn(1500);
	$('.intro .propose3').delay(1500).fadeIn(1500);
	*/
	$('.menu > li').hover(
		function() {
			$(this).children('ul').slideDown(0);
		},
		function() {
			$(this).children('ul').slideUp(0);
		}
	);
	var tabs = $('.more .tab > div');
	$('.more .nav li a').click(function () {
		tabs.hide();
		tabs.filter(this.hash).stop(true, true).fadeIn(0);
		$('.more .nav li').removeClass('active');
		$(this).parent().addClass('active');
		return false;
	}).filter(':first').click();
	var desc = $('.description .tab');
	$('.description .nav li a').click(function () {
		desc.hide();
		desc.filter(this.hash).stop(true, true).fadeIn(0);
		$('.description .nav li').removeClass('active');
		$(this).parent().addClass('active');
		return false;
	}).filter(':first').click();
	$('input').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	var comparesize = ( Math.floor ( 960 / $('.cb .compare').attr('id') ) - 1);
	$('.cb .compare li strong, .cb .compare li span').width(comparesize);
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
	$('.top .menu li ul li:last-child').css({'padding': '0', 'margin': '0', 'border-right-width': '0'});
	$('.user .basket .login li:last-child, .lb .basket .login li:last-child, .content .breadcrumbs li:last-child, .footer .login li:last-child').css({'padding': '0', 'margin': '0', 'background': 'none'});
	$('.top .menu li ul li p:last-child, .footer .list li:last-child, .footer .list li p:last-child').css({'margin': '0'});
	$('.rb .catalog li:nth-child(3n), .rb .list ul li:nth-child(3n), .rb .same ul li:nth-child(3n), .rb div.compare li:nth-child(3n), .rb .text .gallery li:nth-child(3n)').css({'margin-right': '0'});
	$('.lb .sale > div ul li:nth-child(2n)').css({'float': 'right'});
	$('.cb .compare li:nth-child(2n)').css({'background': '#dadada'});
});