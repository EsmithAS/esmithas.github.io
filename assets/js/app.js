const qs = document.querySelector.bind(document);
const qsAll = document.querySelectorAll.bind(document);

/*----------------
-- JS LOADING
------------------*/
window.onload = ()=>{
    setTimeout(() => {
        qs('.loading').classList.add('hidden-element');
        qs('html').classList.remove('overflow-y-hidden')
    }, 3000);
}

/*----------------
-- JS SHOW MENU
------------------*/
qs('#btn-menu').addEventListener( 'click' , (e) => {

    let icon = 'assets/svg/icon/menu.svg#menu';

    qs('.navbar__menu').classList.toggle('show-menu');

    if ( qs('.navbar__menu').classList.contains('show-menu') ) {
        icon = 'assets/svg/icon/close.svg#close';
    }
    
    qs('#btn-menu > svg > use').setAttribute( 'href', icon );

} );

/*------------------------
-- JS THEME DARK - LIGHT
--------------------------*/
const date = new Date();

if( date.getHours() >= 19 ) {
    changeTheme();
}
qs('#btn-theme').addEventListener( 'click' , (e) => {
    changeTheme();    
} );

function changeTheme () {
    let icon = 'assets/svg/icon/moon.svg#moon';

    qs('body').classList.toggle('dark');

    if ( qs('body').classList.contains('dark') ) {
        icon = 'assets/svg/icon/sun.svg#sun';
    }

    qs('#btn-theme > svg > use').setAttribute( 'href', icon );
}
/*----------------
-- JS SWIPER
------------------*/
// const Swipes = new Swiper('.swiper-container', {
//     slidesPerView: 2,
//     loop: false,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//     },
// });
newSwiper('.portfolio__main',( config )=>{
    return config;
})
newSwiper('.portfolio__main-fm',( config )=>{
    config.slidesPerView = 1;
    config.spaceBetween = 15;
    config.breakpoints = {
        769: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    }
    return config;
})
function newSwiper(selector, AddConfig ) {
    const config = {
        loop: false,
        navigation: {
            nextEl: `${selector} .swiper-button-next`,
            prevEl: `${selector} .swiper-button-prev`
        },
        pagination: {
            el: `${selector} .swiper-pagination`
        }
    };
    
    const Swipes = new Swiper(selector, AddConfig(config) );
}

/*----------------
-- JS SELECT MENU
------------------*/
qs('header nav').addEventListener( 'click' , (e)=> {
    if (e.target.nodeName === 'A') {
        qs('a.selected').classList.remove('selected')
        e.target.classList.add('selected')
    }
} )
const sections = {};
qsAll('section').forEach( e =>{
    sections[e.id] = e.offsetTop;
})
window.onscroll = ()=>{
    const scrollY = window.scrollY
    if (scrollY > (window.screen.height / 2)) {
        qs('a#btnHome').classList.remove('hidden-element')
    } else {
        qs('a#btnHome').classList.add('hidden-element')
    }
    for( let i in sections ){
        if (sections[i] <= scrollY) {
            if (qs('nav a[href*='+ i +']') && qs('a.selected')) {
                qs('a.selected').classList.remove('selected')
                qs('nav a[href*='+ i +']').classList.add('selected')
            }
        }
    }
}