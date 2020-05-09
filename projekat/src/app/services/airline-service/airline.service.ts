import { Injectable } from '@angular/core';
import { Airline } from 'src/app/entities/airline/airline';
import { Flight } from 'src/app/entities/flight/flight';

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

        const a1 = new Airline(1,"Qatar Airways","Doha","Opis 1",5,"Wordwide");
        const a2 = new Airline(2,"Emirates","Dubai","Opis 2",2,"All USA countries");
        const a3 = new Airline(3,"EVA Air","London","Opis 3",3,"Europe only");
        //const a4 = new Airline(4,"Lufthansa","Berlin","Opis 4",2.5,"Whole world");
       // const a5 = new Airline(5,"Hainan Airlines","Tokio","Opis 5",3.5,"Asia and Europe");
       // const a6 = new Airline(6,"Wizz Air","Tuzla","Opis 6",2,"Middle Europe");
        

       let TransitLocations = new Array<string>();
       const f1=new Flight(1,"Beograd","Budimpesta",new Date(2020,7,14,10,30,0,0),new Date(2020,7,14,11,30,0,0),110,0,TransitLocations,120,340);
       const f2=new Flight(1,"Beograd","Bec",new Date(2020,7,14,12,30,0,0),new Date(2020,7,14,11,30,0,0),210,0,TransitLocations,120,440);

        a1.flights.push(f1);
        a2.flights.push(f2);

        allAirlines.push(a1);
        allAirlines.push(a2);
        allAirlines.push(a3);
        //allAirlines.push(a4);
       // allAirlines.push(a5);
       // allAirlines.push(a6);

        return allAirlines;
    }
}