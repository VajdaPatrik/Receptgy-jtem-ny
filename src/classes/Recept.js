export default class Recept{
    #kep;
    #nev;
    #elkIdo;
    #nehezseg;

    constructor(kep, nev, elkIdo){
        this.setKep(kep);
        this.setNev(nev);
        this.setElkIdo(elkIdo);

        this.getKep = this.getKep.bind(this) 
        this.getNev = this.getNev.bind(this) 
        this.getElkIdo = this.getElkIdo.bind(this) 
        this.getNehezseg = this.getNehezseg.bind(this) 

        this.setKep = this.setKep.bind(this) 
        this.setNev = this.setNev.bind(this) 
        this.setElkIdo = this.setElkIdo.bind(this) 
        this.setNehezseg = this.setNehezseg.bind(this) 
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

    setNehezseg(nehezseg) {
        this.#nehezseg = nehezseg
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

    getNehezseg(){
        return this.#nehezseg;
    }
}