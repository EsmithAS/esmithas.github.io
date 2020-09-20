const selector = document.querySelector.bind(document);
const selectores = document.querySelectorAll.bind(document);
const dt = new Data();
const ui = new UI();

selector("#btnMenu").addEventListener( 'click' , ()=> {
    selector("#menu-item").classList.toggle('bg-menu-res');
    selector("#btnMenu").classList.toggle('img-menu');
    
    if(!selector(".redes").classList.contains('redes-black')){
        selector("#menu").classList.toggle('bg-menu');
    }
})

window.onscroll =  () => {

    if (window.scrollY > 0) {
        selector("#menu").classList.add('bg-menu');
        selector(".redes").classList.add('redes-black');

        ui.forSelector(selectores(".redes svg"),(element)=>{
            element.classList.add('svgRedesWhite');
        });

    } else {

        if(!selector("#menu-item").classList.contains('bg-menu-res')){
            selector("#menu").classList.remove('bg-menu');
        }
        
        selector(".redes").classList.remove('redes-black');

        ui.forSelector(selectores(".redes svg"),(element)=>{
            element.classList.remove('svgRedesWhite');
        });
    }
}


/* Obteniendo datos json */
const data = dt.data();
data.then( dt => {

    ui.insertSkills( dt.skills );
    ui.insertWorks( dt.projects );

});