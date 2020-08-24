import { Flight } from '../flight/flight';
import { Seat } from '../seat/seat';

export class ReservedFlight {

    flight: Flight;
    //reservedSeats= new Array<Seat>();
    numberOfReservedSeats: number;

    constructor(flight:Flight, numberOfSeat : number){
        this.flight = flight;
      
        this.numberOfReservedSeats = numberOfSeat;
    }
}
