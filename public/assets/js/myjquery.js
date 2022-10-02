$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.slider').slider();
});

$(window).scroll(function (event) {
	var s = $(".services").offset().top;
	var p = $(".projects").offset().top;
	var a = $(".about").offset().top;
	var c = $(".contact").offset().top;
	
	var w = $(window).scrollTop();
	
	if(w>s){
	$("nav").removeClass("nav-hero");	
	$('#services-content').css({
		'margin-top' : '140px',
		'transition' : '300ms'
	});
	}
	else if(w<s){
	$("nav").addClass("nav-hero");
	$('#services-content').css({
		'margin-top' : '0px',
		'transition' : '300ms'
	});
	}
	
	if(w>p){
	$('#projects-content').css({
		'margin-top' : '140px',
		'transition' : '300ms'
	});
	}
	else if(w<p){
	$('#projects-content').css({
		'margin-top' : '0px',
		'transition' : '300ms'
	});
	}
	
	if(w>a){
	$('#about-content').css({
		'margin-top' : '140px',
		'transition' : '300ms'
	});
	}
	else if(w<a){
	$('#about-content').css({
		'margin-top' : '0px',
		'transition' : '300ms'
	});
	}
	
	if(w>c){
	$('#contact-content').css({
		'margin-top' : '140px',
		'transition' : '300ms'
	});
	}
	else if(w<c){
	$('#contact-content').css({
		'margin-top' : '0px',
		'transition' : '300ms'
	});
	}
});