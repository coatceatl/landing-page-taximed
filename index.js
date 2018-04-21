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
    alert('send');
  })
//  $("#phone").mask("(999) 999-9999");
});

