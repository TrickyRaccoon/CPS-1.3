let feedback = document.querySelector('.feedback-modal');
let feedbackContainer = document.querySelector('.feedback-page')
let feedbackButton = document.querySelector('.connection-buttons .button--chat');
let feedbackButtonAside = document.querySelector('.aside .side-menu .side-menu__footer .connection-buttons .button--chat');
let closeButton = document.querySelector('.feedback-page .button--close');
let main = document.querySelector('.main');

feedbackButton.onclick = function() {
    feedbackContainer.classList.add('feedback-page_active');
    main.classList.add('main_disabled');
};

feedbackButtonAside.onclick = function() {
    feedbackContainer.classList.add('feedback-page_active');
    main.classList.add('main_disabled');
};

closeButton.onclick = function() {
    feedbackContainer.classList.remove('feedback-page_active');
    main.classList.remove('main_disabled');
};

feedbackContainer.addEventListener('click', (e) =>{
    const click = e.composedPath().includes(feedback);
    if( !click){
        feedbackContainer.classList.remove('feedback-page_active');
        main.classList.remove('main_disabled');
    };
});