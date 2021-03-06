document.addEventListener("DOMContentLoaded", function(){

  let slideCollection = document.querySelectorAll('.slider-list__item'),
      slideCount =  document.querySelectorAll('.slider-list__item').length,
      slideWidth =  document.querySelector('.slider-list__item').offsetWidth,
      slideHeight = document.querySelector('.slider-list__item').offsetHeight,
      lastSlider = document.querySelector('.slider-list .slider-list__item:last-child'),
      slideList = document.querySelector('.slider-list'),
      getWport = document.documentElement.clientWidth,
      sliderUlWidth = slideCount * slideWidth;
    slideList.style.width = sliderUlWidth + 'px';
    slideList.style.height = slideHeight + 'px';
    slideList.style.marginLeft = - slideWidth + 'px';
    slideList.insertBefore(lastSlider, slideList.children[0]);

    for(let x = 0; x < slideCount; x++){
      slideCollection[x].style.width = getWport + 'px';
    }

    function slideLeft() {
        let start = Date.now();
        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            slideList.style.left = timePassed - slideWidth + 'px';
            if(slideList.style.left > '0px') {
                slideList.style.left = 0 + 'px';
            }
            if (timePassed > 2000) clearInterval(timer);
        }, 20);
        let firstSlide =  document.querySelector('.slider-list .slider-list__item:first-child');
        slideList.insertBefore(firstSlide, slideList.children[slideList.length]);
    }

    function slideRight() {
        let start = Date.now();
        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            slideList.style.left = - timePassed + slideWidth + 'px';
            if(slideList.style.left < '0px') {
                slideList.style.left = 0 + 'px';
            }
            if (timePassed > 2000) clearInterval(timer);
        }, 20);
        let firstSlide =  document.querySelector('.slider-list .slider-list__item:last-child');
        slideList.insertBefore(firstSlide, slideList.children[0]);
    }
    document.querySelector('.slider-btn__left').addEventListener('click', function(){
        slideLeft();
    });
    document.querySelector('.slider-btn__right').addEventListener('click', function(){
        slideRight();
    });
});
