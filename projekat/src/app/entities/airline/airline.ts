import { Flight } from '../flight/flight';

export class Airline{
    id: number;
    name: string;
    address: string;
    description: string;
    mark: number;
    destinations: string;
    flights = new Array<Flight>(); // obavezno ovako... ne ovako: flights: Array<Flight>;
    adminId: string;
    adminName: string;
    activated: boolean;
    

    constructor(id:number,name: string,address: string,description: string,mark: number,destinations: string,adminId: string,adminName: string)
    {
        this.id = id;
        this.name = name;
        this.address = address;
        this.description = description;
        this.mark = mark;
        this.destinations = destinations;
        this.adminId=adminId;
        this.adminName=adminName;
        this.activated=false;
    }
}