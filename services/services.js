var services = document.querySelector('.services');
var readMoreButton = document.querySelector('.readmore-button');
var readMoreButtonDescription = document.querySelector('.readmore-button__description');
var expandButton = document.querySelector('.expand-button');

readMoreButton.onclick = function() {
    services.classList.toggle('services_active');
    expandButton.classList.toggle('expand-button_active')
    readMoreButton.classList.toggle('readmore-button_active')
    if(readMoreButtonDescription.textContent === 'Показать все'){
        readMoreButtonDescription.textContent = 'Скрыть'
    } else {
        readMoreButtonDescription.textContent = 'Показать все'
    }
  };