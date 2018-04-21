$(document).ready(function() {
  $('.hamburger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('#navigation').toggleClass('nav-menu--menu-mobile');
  });
});


$(document).ready(function() {
  $('#form').submit(function(e) {
    e.preventDefault();
    alert( $(this).serialize() );
    alert('Ваша заявка принята!');
  });
});

$.mask = {
  definitions: { '9': '[0-9]' },
  autoclear: !0,
  placeholder: '-'
}

$(document).ready(function() {
  $("#phone").mask('+7 (999) 999-9999');
});


