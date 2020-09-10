class UI {


    insHabilidades ( habilidades ){

        const template = '';

        habilidades.forEach( habilidad => {

            template += 
            `<div class="cont-tecno">
                <svg>
                <use href="SVG/icons.svg#github"></use>
                </svg>
                <h3>Lenguaje 1</h3>
            </div> `;

        } );

    }

    /* Funcion para recorrer elementos, recibes los elementos y una funcion que con la que se modificara el elemento */
    forSelector ( elementos , propiedad ){
        elementos.forEach(element => {
            propiedad(element);
        });
    }


}