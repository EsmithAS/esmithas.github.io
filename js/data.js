class Data {

    constructor (){
        this.urlData = "../json/data.json";
    }

    async data() {
        const datos = await fetch(this.urlData);
        const json = datos.json();

        return{
            json
        }
    }

    obtHabilidades () {
        const datos = this.data().skills;
        
        return {
            datos
        }
        
    }

    obtProyectos () {
        const datos = this.data().projects;
        
        return {
            datos
        }
        
    }

}