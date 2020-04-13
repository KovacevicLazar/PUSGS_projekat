import { Injectable } from '@angular/core';
import { Airline } from 'src/app/entities/airline/airline';

@Injectable({
    providedIn: 'root'
})

export class AirlineService{
    
    constructor() {}

    loadAirlines(){
        console.log('Ucitavanje kompanija...');
        return this.mockedAirlines();
    }

    mockedAirlines(): Array<Airline>{
        let allAirlines = new Array<Airline>();

        const a1 = new Airline(1,"Wizzair","Tuzla,Solunska 5","Mnogo dobra kompanija",5,"Spanija,Italija");
        const a2 = new Airline(2,"SrbijaLetovi","Subotica,Pap Pavla","Mnogo jeftina",2,"Sve Evropske zemlje");
        const a3 = new Airline(3,"SekoviciTravel","Sekovici,BB","Kidaju",3,"Samo amerika");

        allAirlines.push(a1);
        allAirlines.push(a2);
        allAirlines.push(a3);

        return allAirlines;
    }
}