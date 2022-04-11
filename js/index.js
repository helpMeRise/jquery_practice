
const menuBtn = $('.header__burger');
const headerNav = $('.navigation');
const close = $('.navigation__close')

menuBtn.on('click', function() {
  headerNav.animate({
    left: 0,
  }, 500, function() {
    close.animate({
      opacity: 1,
    }, 300, 'swing');
  });
})

close.click(function() {
  headerNav.animate({left: -400});
})

$(document).click(function(e) {
  if (!$(e.target).is(headerNav) && !$(e.target).is(menuBtn)) {
    headerNav.animate({left: -400});
  }
})