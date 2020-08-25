import { Injectable } from '@angular/core';
import { Airline } from 'src/app/entities/airline/airline';
import { Flight } from 'src/app/entities/flight/flight';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { Seat } from 'src/app/entities/seat/seat';

@Injectable({
    providedIn: 'root'
})

export class AirlineService{
    
    constructor(private http: HttpClient) {}
    readonly BaseURI = 'http://localhost:51716/api';



    GetFlightForAirline(){
        return this.http.get(this.BaseURI + '/Flight/GetFlightForAirline');
    }

 

    AddingFlight(flight : Flight)
    {
        let FirstStop ="";
        let SecondStop= "";
        let ThirdStop="";
        for (let i = 0; i < flight.Transitlocations.length; i++) {
           if(i==0){
               FirstStop = flight.Transitlocations[i];
           }
           else  if(i==1){
             SecondStop = flight.Transitlocations[i];
           }
           else{
              ThirdStop = flight.Transitlocations[i];
           }
        }
        
        let body = {
            FlyingFrom: flight.flyingfrom,
            FlyingTo: flight.flyingTo,
            FlightDistance: flight.flightDistance,
            DateDepart: flight.dateDepart,
            DateArrival: flight.dateArrival,
            TicketPrice: flight.ticketPrice,
            FirstStop: FirstStop,
            SecondStop: SecondStop,
            ThirdStop: ThirdStop
            
        }

        return this.http.post(this.BaseURI + '/Flight/AddingFlight', body);
    }


    DeleteFlightFromList(id: number)
    {
        return this.http.get(this.BaseURI + '/Flight/DeleteFlightFromList/' + id);
    }


    
    SaveChangesOnFlight(flight : Flight)
    {
        let FirstStop ="";
        let SecondStop= "";
        let ThirdStop="";
        for (let i = 0; i < flight.Transitlocations.length; i++) {
           if(i==0){
               FirstStop = flight.Transitlocations[i];
           }
           else  if(i==1){
             SecondStop = flight.Transitlocations[i];
           }
           else{
              ThirdStop = flight.Transitlocations[i];
           }
        }

        let body = {
            FlyingFrom: flight.flyingfrom,
            FlyingTo: flight.flyingTo,
            FlightDistance: flight.flightDistance,
            DateDepart: flight.dateDepart,
            DateArrival: flight.dateArrival,
            TicketPrice: flight.ticketPrice,
            FirstStop: FirstStop,
            SecondStop: SecondStop,
            ThirdStop: ThirdStop
            
        }

        return this.http.post(this.BaseURI + '/Flight/saveChangesOnFlight/' +flight.id, body);
    }

    GetCompanyInfo()
    {
        return this.http.get(this.BaseURI + '/Flight/GetCompanyInfo'); 
    }

    SaveChangeInfo(airline: Airline)
    {
        var body = {
            Description: airline.description,
            CompanyName : airline.name,
            Id: airline.id,
            Adress: airline.address
        }

        return this.http.post(this.BaseURI + '/Flight/SaveChangeInfo', body);
    }



    GetSearchedFlights(flyingfrom: string, flyingTo : string, dateDepart: string , numberOfSeat : number, dateArrival: string)
    {
       
        return this.http.get(this.BaseURI + '/Flight/GetSearchedFlights/' + flyingfrom +'/'+ flyingTo +'/'+ dateDepart +'/'+ numberOfSeat +'/'+ dateArrival);
    
    }

    GetFlightWithId(id: number)
    {
        return this.http.get(this.BaseURI + '/Flight/GetFlightWithId/' + id);
    }

    SeatReservation(seat : Seat){
        var body = {
            seatName: seat.seatName,
            NameOfUser: seat.nameOfUser,
            SurnameOfUser : seat.surnameOfUser,
            passportNumberOfUser : seat.passportNumberOfUser,
            userID: seat.userID,
            flightID: seat.flightID
        }
        return this.http.post(this.BaseURI + '/Flight/SeatReservation', body);
    }


    CancelFlightReservation(id : number)
    {
        return this.http.get(this.BaseURI + '/Flight/CancelFlightReservation/' + id);
    }


    AcceptReservationRequests(flight : Flight){
        var body = {
            id: flight.id
        }
        return this.http.post(this.BaseURI + '/Flight/AcceptReservationRequests',body);
    }

    RejectReservationRequests(flight : Flight){
        var body = {
            id: flight.id
        }
        return this.http.post(this.BaseURI + '/Flight/RejectReservationRequests',body);
    }






    loadAirlines(){
        console.log('Ucitavanje kompanija...');
        return this.mockedAirlines();
    }

    mockedAirlines(): Array<Airline>{
        let allAirlines = new Array<Airline>();

        const a1 = new Airline(1,"Qatar Airways","Doha","Opis 1",5,"");
        const a2 = new Airline(2,"Emirates","Dubai","Opis 2",2,"");
        const a3 = new Airline(3,"EVA Air","London","Opis 3",3,"");
        //const a4 = new Airline(4,"Lufthansa","Berlin","Opis 4",2.5,"Whole world");
       // const a5 = new Airline(5,"Hainan Airlines","Tokio","Opis 5",3.5,"Asia and Europe");
       // const a6 = new Airline(6,"Wizz Air","Tuzla","Opis 6",2,"Middle Europe");
        

       let TransitLocations1 = new Array<string>();
       let TransitLocations2 = new Array<string>();
       TransitLocations1.push("Novi Sad");
       TransitLocations1.push("Subotica");
       TransitLocations2.push("Novi Sad");
       TransitLocations2.push("Subotica");
       const f1=new Flight(0,"Beograd","Budimpesta",new Date(2020,10,14,9,30,0,0),new Date(2020,10,14,11,30,0,0),110,TransitLocations1,250,120,0);
       const f2=new Flight(1,"Beograd","Bec",new Date(2020,10,14,12,30,0,0),new Date(2020,10,14,11,30,0,0),210,TransitLocations2,330,120,0);
     
      

    

        allAirlines.push(a1);
        allAirlines.push(a2);
        allAirlines.push(a3);
        //allAirlines.push(a4);
       // allAirlines.push(a5);
       // allAirlines.push(a6);

        return allAirlines;
    }
}