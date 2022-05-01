const readMoreButton = document.querySelector('.services__readmore-button');
const servicesText = document.querySelector('.services__info-text');

readMoreButton.onclick = function() {
    servicesText.classList.toggle('services__info-text--active');
    readMoreButton.classList.toggle('readmore-button--rotate');
    if(readMoreButton.textContent === 'Показать все'){
        readMoreButton.textContent = 'Скрыть'
    } else {
        readMoreButton.textContent = 'Показать все'
    }
};