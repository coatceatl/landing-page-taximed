$(document).ready(function() {
  $('.hamburger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('#navigation').toggleClass('nav-menu--menu-mobile');
  });
});

$.mask = {
  definitions: { '9': '[0-9]' },
  autoclear: !0,
  placeholder: '-'
}

$(function($) {
  $("#phone").mask('+7 (999) 999-9999');
});

$('#form').submit(function(e) {
  e.preventDefault();
  alert('Ваша заявка принята!');

  $.ajax ({
    type: 'POST',
    url: 'mail.json',
    data: $(this).serialize()
  })
});



