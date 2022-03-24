var swiper= Swiper;
var init = false;

function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1439px)');
    let desktop = window.matchMedia('(min-width: 1440px)');

    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.swiper', {
                direction: 'horizontal',
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                slidesPerView: 1.19,
                slidePerGroup: 1,
            });
        }
    }

    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }

    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}
window.addEventListener('load', function() {
    swiperMode();
});
window.addEventListener('resize', function() {
    swiperMode();
});