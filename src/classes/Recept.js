export default class Recept{
    #kep;
    #nev;
    #elkIdo;

    constructor(kep, nev, elkIdo){
        this.setKep(kep);
        this.setNev(nev);
        this.setElkIdo(elkIdo);

        this.getQuestion = this.getQuestion.bind(this) 
        this.getAnswers = this.getAnswers.bind(this) 
        this.getGoodAnswer = this.getGoodAnswer.bind(this) 

        this.setKep = this.setKep.bind(this) 
        this.setNev = this.setNev.bind(this) 
        this.setElkIdo = this.setElkIdo.bind(this) 
    }

    setKep(kep){
        this.#kep = kep;
    }

    setNev(nev){
        this.#nev = nev;
    }

    setElkIdo(elkIdo){
        this.#elkIdo = elkIdo;
    }

    getKep(){
        return this.#kep;
    }

    getNev(){
        return this.#nev;
    }

    getElkIdo(){
        return this.#elkIdo;
    }
}