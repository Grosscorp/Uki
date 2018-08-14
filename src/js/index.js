$(function () {

  $('.nav a, .btn-group, .logo').on('click', smoothScroll);

  const $ham = $('.hamburger');
  const $nav = $('.header__items');

  $ham.on('click', function() {
    $ham.toggleClass('is-active');
    $nav.slideToggle();
  });

  $(window).resize(function(){
    if($(window).width() > 720) {
      $nav.removeAttr('style');
      $ham.removeClass('is-active');
    }
  });

  function smoothScroll(e) {
    e.preventDefault();
    const selector = $(this).attr('href');
    const h = $(selector);

    if($(window).width() > 720) {
      $('html, body').animate({
        scrollTop: h.offset().top - 10
      }, 600);
    } else {
      $('html, body').animate({
        scrollTop: h.offset().top - 60
      }, 600);
    }
  }
});


import $ from 'jquery';
import '../scss/style.scss';