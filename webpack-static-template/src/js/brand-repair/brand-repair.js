var repairBrands = document.querySelector('.swiper-wrapper');
var readMoreButton = document.querySelector('.brand-repair__readmore-button');
var readMoreButtonDescription = document.querySelector('.brand-repair__readmore-button .readmore-button__description');
console.log(readMoreButtonDescription);
var repairExpandButton = document.querySelector('.brand-repair__readmore-button .readmore-button__description::before');

readMoreButton.onclick = function() {
    repairBrands.classList.toggle('swiper-wrapper--active');
    repairExpandButton.classList.toggle('readmore-button__description::before--active')
    readMoreButton.classList.toggle('readmore-button--active')
    if(readMoreButtonDescription.textContent === 'Показать все'){
        readMoreButtonDescription.textContent = 'Скрыть'
    } else {
        readMoreButtonDescription.textContent = 'Показать все'
    }
};