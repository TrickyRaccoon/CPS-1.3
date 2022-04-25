var repairMechanizm = document.querySelector('.mechanizm-repair .swiper .swiper-wrapper');
var mechanizmReadMoreButton = document.querySelector('.mechanizm-repair__readmore-button');
var mechanizmReadMoreButtonDescription = document.querySelector('.mechanizm-repair__readmore-button .readmore-button__description');
var mechanizmRepairExpandButton = document.querySelector('.mechanizm-repair__readmore-button .readmore-button__description::before');

mechanizmReadMoreButton.onclick = function() {
    repairMechanizm.classList.toggle('swiper-wrapper--active');
    mechanizmRepairExpandButton.classList.toggle('readmore-button__description::before--active')
    mechanizmReadMoreButton.classList.toggle('readmore-button--active')
    if(mechanizmReadMoreButtonDescription.textContent === 'Показать все'){
        mechanizmReadMoreButtonDescription.textContent = 'Скрыть'
    } else {
        mechanizmReadMoreButtonDescription.textContent = 'Показать все'
    }
};