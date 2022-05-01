const repairBrands = document.querySelector('.swiper-wrapper');
const readMoreButton = document.querySelector('.brand-repair__readmore-button');

readMoreButton.onclick = function() {
    repairBrands.classList.toggle('swiper-wrapper--active');
    readMoreButton.classList.toggle('readmore-button--rotate')
    if(readMoreButton.textContent === 'Показать все'){
        readMoreButton.textContent = 'Скрыть'
    } else {
        readMoreButton.textContent = 'Показать все'
    }
};