import { Flight } from '../flight/flight';
import { Seat } from '../seat/seat';

export class ReservedFlight {

    flight: Flight;
    reservedSeats= new Array<Seat>();
    userID: string;
    numberOfReservedSeats=0;

    constructor(flight:Flight, seats : Array<Seat>, userID: string){
        this.flight=flight;
        this.reservedSeats=seats;
        this.userID = userID;
        this.numberOfReservedSeats=this.reservedSeats.length;
    }
}
