var burger = document.querySelector('.burger');
var nav = document.querySelector('.nav-list');
var navLinks = document.querySelectorAll('.nav-list li');
var logo = document.querySelector('.nav-logo');
var usluge = document.querySelector('.nav-usluge');
var portfolio = document.querySelector('.nav-portfolio');
var kontakt = document.querySelector('.nav-kontakt');

var navSlide = () => {

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 0.5}s`;
            }
            
        });

        burger.classList.toggle('toggle');
    });

    

    logo.addEventListener('click', () => {
        nav.classList.remove('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 0.5}s`;
            }
            
        });

        burger.classList.toggle('toggle');
    });

    usluge.addEventListener('click', () => {
        nav.classList.remove('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 0.5}s`;
            }
            
        });

        burger.classList.toggle('toggle');
    });

    portfolio.addEventListener('click', () => {
        nav.classList.remove('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 0.5}s`;
            }
            
        });

        burger.classList.toggle('toggle');
    });

    kontakt.addEventListener('click', () => {
        nav.classList.remove('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 0.5}s`;
            }
            
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();

$.global = new Object();

$.global.item = 1;
$.global.total = 0;
$.global.slider = 0;


$(document).ready(function() {    
	
    var SlideCount = $('#slides li').length;	
	var SliderWidth = SlideCount * 100;
	var SlideWidth = 100 / SlideCount;
	
    $.global.total = SlideCount; 
    
	$('#image-carousel .handle').css('width',''+SliderWidth+'%');
	$('#image-carousel .handle .slide').css('width',''+SlideWidth+'%');
    
    const slajdovi = [];

    $('.slide').each(function() {
        slajdovi.push($(this));
    });

    var razmak = 0;
    slajdovi.forEach(function(element){
        $(element).css('left', razmak+'%');
        razmak += 23;
    });

    const mobilniP = [];

    $('.touch-info').each(function() {
        mobilniP.push($(this));
    });

    var razmak = 0;
    mobilniP.forEach(function(element){
        $(element).css('left', razmak+'%');
        razmak += 23;
    });

    const backColor = [];

    $('.back-color').each(function() {
        backColor.push($(this));
    });

    var razmak = 0;
    backColor.forEach(function(element){
        $(element).css('left', razmak+'%');
        razmak += 23;
    });
	
	DragIt();
  
  
    $('#right-arrow').click(function() {                   
        var $currentstep = $.global.slider.getStep();
        var $nextstep = parseInt($currentstep) + 1; $.global.slider.setStep($nextstep);
    });
  
    $('#left-arrow').click(function() {                   
        var $currentstep = $.global.slider.getStep();
        var $nextstep = parseInt($currentstep) - 1; $.global.slider.setStep($nextstep);
    });
  
});
   
function DragIt(){
  $.global.slider = new Dragdealer('image-carousel', {
  steps: $.global.total,
  speed: 0.2,
  loose: true,
  css3: true,
    top:0,
    bottom:0,
    left:0,
    right:0,
  requestAnimationFrame: true,
  callback: function(x, y) {
    $('#console').html(x);}
  });
}