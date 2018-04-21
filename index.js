$(document).ready(function() {
  $('.hamburger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('#navigation').toggleClass('nav-menu--menu-mobile');
  });
});
