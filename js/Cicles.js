// classe Cicle
export class Cicle {

    constructor(nom, categoria, numAlumnes, abreviatura) {
        this.nom = nom;
        this.categoria = categoria;
        this.numAlumnes = numAlumnes;
        this.abreviatura = abreviatura;
        this.numEdicions = 0;
        this.dataEdicio = new Date();
        this.moduls = [];
    }
    //Funció que actualitza el nombre d'edicions i la data d'edició
    setNumEdicions() {
        this.numEdicions++;
        this.dataEdicio = new Date();
    }
    //Funció que mostra els valors del Cicle formatejat
    toString() {
        let text = `
        Nom Cicle: ${this.nom}
        Categoria: ${this.categoria}
        Numero d'alumnes: ${this.numAlumnes}
        Abreviatura: ${this.abreviatura}
        Moduls:`;
        this.moduls.forEach(modul => {
            text += `
            - ${modul.toString()}`;
        })
        return text;
    }

    //Funció per insertar moduls al cicle
    insertModul(modul) {
        this.moduls.push(modul);
    }
    //Funció per mostrar el total hores dels moduls
    totalHoresModul() {
        let totalHores = 0;
        this.moduls.forEach(modul => {
            totalHores+=parseInt(modul.getHores());
        })
        return totalHores;
    }
    //Funció que retorna la data de edició en format DD/MM/YYYY
    ultimaEdicio() {
        return `${this.dataEdicio.getDate()}/${this.dataEdicio.getMonth()+1}/${this.dataEdicio.getFullYear()}`
    }
}