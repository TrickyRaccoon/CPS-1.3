let sideMenuContainer = document.querySelector('.aside');
let sideMenu = document.querySelector('.side-menu')
let burgerButton = document.querySelector('.button--menu');
let closeButton = document.querySelector('.side-menu__header .button--close');
let main = document.querySelector('.main');

burgerButton.onclick = function() {
    sideMenuContainer.classList.add('aside_active');
    main.classList.add('main_disabled');
};
closeButton.onclick = function() {
    sideMenuContainer.classList.remove('aside_active');
    main.classList.remove('main_disabled');
}

sideMenuContainer.addEventListener('click', (e) =>{
    const click = e.composedPath().includes(sideMenu);
    if( !click){
        sideMenuContainer.classList.remove('aside_active');
        main.classList.remove('main_disabled');
    };
});