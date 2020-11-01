class Data {

    constructor (){
        this.urlData = "../json/data.json";
    }

    async data() {
        const datos = await fetch(this.urlData);
        const json = await datos.json();
        return json;
    }

    async sendEmail( idForm ) {
        const formData = new FormData( document.getElementById( idForm ) )
        const peticion = await fetch( 'https://complementoemail.000webhostapp.com/' , {
            method : 'POST' ,
            body : formData,
            mode : 'cors',
	        headers : {
            	'Access-Control-Allow-Origin': '*',
        	}
        } );
        // const respuesta = await peticion;
        // console.log(respuesta);
    }

}