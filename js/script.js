$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: $('.slider__prev'),
    nextArrow: $('.slider__next')
  });


function dropdown() {
  let dropDownElem = document.getElementsByClassName('nav__dropdown');
  dropDownElem[0].classList.toggle('active');
}

function dropdownmobile() {
  let dropDownElem = document.getElementsByClassName('nav__dropdown--mobile');
  dropDownElem[0].classList.toggle('active');
}

