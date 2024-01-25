export class Modul {
    constructor(cicle, nom, num, hores) {
        this.cicle = cicle;
        this.nom = nom;
        this.num = num;
        this.hores = hores;
    }
    //Funció que mostra els valors del Mòdul formatejat
    toString() {
        return `MP${this.num}. ${this.nom} (${this.hores}h)`;
    }
    //Getter per accedir a les hores del mòdul
    getHores() {
        return this.hores
    }
}