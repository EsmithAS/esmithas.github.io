const qs = document.querySelector.bind(document);

qs('#btn-menu').addEventListener( 'click' , (e) => {

    let icon = 'assets/svg/icon/menu.svg#menu';

    qs('.navbar__menu').classList.toggle('show-menu');

    if ( qs('.navbar__menu').classList.contains('show-menu') ) {
        icon = 'assets/svg/icon/close.svg#close';
    }
    
    qs('#btn-menu > svg > use').setAttribute( 'href', icon );

} );

qs('#btn-theme').addEventListener( 'click' , (e) => {

    let icon = 'assets/svg/icon/moon.svg#moon';

    qs('body').classList.toggle('dark');

    if ( qs('body').classList.contains('dark') ) {
        icon = 'assets/svg/icon/sun.svg#sun';
    }

    qs('#btn-theme > svg > use').setAttribute( 'href', icon );
} );

const Swipes = new Swiper('.swiper-container', {
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});