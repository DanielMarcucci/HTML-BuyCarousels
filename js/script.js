let $carousel = $('.carousel').flickity({
  wrapAround: true,
  prevNextButtons: false
});

$('.button-previous').on( 'click', function() {
  $carousel.flickity('previous');
});

$('.button-next').on( 'click', function() {
  $carousel.flickity('next');
});

let $carouselNav = $('.carousel-nav');
let $carouselNavCells = $carouselNav.find('.carousel-cell');

$carouselNav.on('click', '.carousel-cell', function (event) {
  let index = $(event.currentTarget).index();
  $carousel.flickity('select', index);
});

let flkty = $carousel.data('flickity');
let navTop = $carouselNav.position().top;
let navCellHeight = $carouselNavCells.height();
let navHeight = $carouselNav.height();

$carousel.on('select.flickity', function () {
  $carouselNav.find('.is-nav-selected').removeClass('is-nav-selected');
  let $selected = $carouselNavCells.eq(flkty.selectedIndex).addClass('is-nav-selected');
  let scrollY = $selected.position().top + $carouselNav.scrollTop() - (navHeight + navCellHeight) / 3.33;
  $carouselNav.animate({
    scrollTop: scrollY
  });
});
