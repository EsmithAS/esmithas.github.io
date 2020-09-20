class Data {

    constructor (){
        this.urlData = "../json/data.json";
    }

    async data() {
        const datos = await fetch(this.urlData);
        const json = await datos.json();
        return json;
    }

}