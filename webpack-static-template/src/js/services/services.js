var servicesText = document.querySelector('.services__info-text');
var readmoreButton = document.querySelector('.services__readmore-button');
var readmoreButtonDescription = document.querySelector('.services__readmore-button .readmore-button__description');
var expandButton = document.querySelector('.services__readmore-button .readmore-button__description::before');

readmoreButton.onclick = function() {
    servicesText.classList.toggle('services__info-text--active');
    expandButton.classList.toggle('readmore-button__description::before--active')
    readmoreButton.classList.toggle('readmore-button--active')
    if(readmoreButtonDescription.textContent === 'Показать все'){
        readmoreButtonDescription.textContent = 'Скрыть'
    } else {
        readmoreButtonDescription.textContent = 'Показать все'
    }
};