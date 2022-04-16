let callback = document.querySelector('.callback-modal');
let callbackContainer = document.querySelector('.callback-page')
let callbackButton = document.querySelector('.connection-buttons .button--call');
let callbackButtonAside = document.querySelector('.aside .side-menu .side-menu__footer .connection-buttons .button--call');
let closeButton = document.querySelector('.callback-page .button--close');
let main = document.querySelector('.main');

callbackButton.onclick = function() {
    callback.classList.add('callback-modal_active');
    main.classList.add('main_disabled');
    callbackContainer.classList.add('callback-page_active');
};

callbackButtonAside.onclick = function() {
    callback.classList.add('callback-modal_active');
    main.classList.add('main_disabled');
    callbackContainer.classList.add('callback-page_active');
};

closeButton.onclick = function() {
    callback.classList.remove('callback-modal_active');
    main.classList.remove('main_disabled');
    callbackContainer.classList.remove('callback-page_active');
};

callbackContainer.addEventListener('click', (e) =>{
    const click = e.composedPath().includes(callback);
    if( !click){
        callback.classList.remove('callback-modal_active');
        main.classList.remove('main_disabled');
        callbackContainer.classList.remove('callback-page_active');
    };
});