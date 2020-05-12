import { Flight } from '../flight/flight';

export class Airline{
    id: number;
    name: string;
    address: string;
    description: string;
    mark: number;
    destinations: string;
    flights = new Array<Flight>(); // obavezno ovako... ne ovako: flights: Array<Flight>;

    constructor(id:number,name: string,address: string,description: string,mark: number)
    {
        this.id = id;
        this.name = name;
        this.address = address;
        this.description = description;
        this.mark = mark;
       
    }
}