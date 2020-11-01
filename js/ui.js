class UI {


    insertSkills( skills ){

        let template = '';

        skills.forEach( skill => {

            template += 
                `<div class="cont-tecno">
                    <div class="cont-svg">
                    <img src="svg/${skill.svg}" alt="">
                    </div>
                    <p>${skill.title}</p>
                </div>`;

        } );

        selector('.tecnologias').innerHTML = template;

    }

    insertWorks( works ){

        let template = '';

        works.forEach( work => {

            template += `
            <div class="cont-work">
                <div class="wor-portada">
                    <img src="img/${work.imagen}" alt="${work.title}">
                </div>
                <div class="wor-info">
                    <h3>${work.title}</h3>
                    <p>${work.description}</p>
                    <a href="${work.link}" target="blank" class="btnVisualizar">Visualizar</a>
                </div>
            </div>
            `;


        } );
        
        selector('.works').innerHTML = template;

    }

    validarLetras(e){
        var letras='áéíóúñ ';
        var key=window.Event ? e.code : e.code;
        return (key==('Key'+e.key.toUpperCase()) || letras.indexOf(e.key.toLowerCase())!=-1);
    }

    /* Funcion para recorrer elementos, recibes los elementos y una funcion que con la que se modificara el elemento */
    forSelector ( elementos , propiedad ){
        elementos.forEach(element => {
            propiedad(element);
        });
    }


}