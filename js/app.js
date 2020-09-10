const selector = document.querySelector.bind(document);
const selectores = document.querySelectorAll.bind(document);
const ui = new UI();

window.onscroll =  () => {

    if (window.scrollY > 0) {
        selector("#menu").classList.add('bg-menu');
        selector(".redes").classList.add('redes-black');

        ui.forSelector(selectores(".redes svg"),(element)=>{
            element.classList.add('svgRedesWhite');
        });

    } else {
        selector("#menu").classList.remove('bg-menu');
        selector(".redes").classList.remove('redes-black');

        ui.forSelector(selectores(".redes svg"),(element)=>{
            element.classList.remove('svgRedesWhite');
        });
    }
}
