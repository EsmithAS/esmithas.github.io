class UI {


    insertSkills( skills ){

        let template = '';

        skills.forEach( skill => {

            template += 
                `<div class="cont-tecno">
                    <div class="cont-svg">
                    <img src="${skill.svg}" alt="">
                    </div>
                    <p>${skill.title}</p>
                </div>`;

        } );

        selector('.tecnologias').innerHTML = template;

    }

    insertWorks( works ){

        let template = '';

        works.forEach( work => {

            template += 
                `<div class="cont-work">
                    <div class="wor-portada">
                    <img src="${work.imagen}" alt="">
                    </div>
                    <div class="wor-info">
                    <h3>${work.title}</h3>
                    <div class="tec-usadas">
                    `;
                    
            work.technologies.forEach( tec => {
                template += `<a>#${tec}</a>`;
            });

            template +=`
                    </div>
                    <a href="${work.link}" target="blank" class="btnVisualizar">Visualizar</a>
                    </div>
                </div>`;

        } );
        
        selector('.works').innerHTML = template;

    }

    /* Funcion para recorrer elementos, recibes los elementos y una funcion que con la que se modificara el elemento */
    forSelector ( elementos , propiedad ){
        elementos.forEach(element => {
            propiedad(element);
        });
    }


}