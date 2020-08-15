import { Flight } from '../flight/flight';

export class ReservedFlight {

    flight: Flight;
    reservedSeats= new Array<string>();
    userEmail: string;
    numberOfReservedSeats=0;

    constructor(flight:Flight, seats : Array<string>, userEmail: string){
        this.flight=flight;
        this.reservedSeats=seats;
        this.userEmail=userEmail;
        this.numberOfReservedSeats=this.reservedSeats.length;
    }
}
