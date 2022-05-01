const repairMechanizm = document.querySelector('.mechanizm-repair .swiper .swiper-wrapper');
const mechanizmReadMoreButton = document.querySelector('.mechanizm-repair__readmore-button');

mechanizmReadMoreButton.onclick = function() {
    repairMechanizm.classList.toggle('swiper-wrapper--active');
    mechanizmReadMoreButton.classList.toggle('readmore-button--rotate')
    if(mechanizmReadMoreButton.textContent === 'Показать все'){
        mechanizmReadMoreButton.textContent = 'Скрыть'
    } else {
        mechanizmReadMoreButton.textContent = 'Показать все'
    }
};