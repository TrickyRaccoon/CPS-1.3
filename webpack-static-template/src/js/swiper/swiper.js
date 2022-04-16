import Swiper, { Pagination } from 'swiper'
Swiper.use([Pagination])
let swiper
const getClass = ['.swiper']
function statusSwiper() {
    let swiperStatus = document.querySelector(getClass[0])
    swiperStatus.dataset.mobile = "false"
    if (window.innerWidth < 767 && swiperStatus.dataset.mobile == "false") {
        swiperStatus.dataset.mobile = "true"
        swiper = new Swiper(getClass[0], {
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 16,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        })
    }
    if (window.innerWidth >= 767) {
        swiperStatus.dataset.mobile = 'false'
        if (swiperStatus.classList.contains('swiper-container-initialized')) {
            swiper.destroy()
        }
    }
}
window.addEventListener('load', function () {
    statusSwiper()
});
window.addEventListener('resize', () => {
    statusSwiper()
})