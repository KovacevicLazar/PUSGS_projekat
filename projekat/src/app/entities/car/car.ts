export class Car{
    id: number;
    location: string;
    address: string;
    brand: string;
    model: string;
    year: number;
    pricePerDay:number;
    
    gps: string;
    babySeats: number;
    checkedInDate: Date;
    checkedOutDate: Date;
    currentlyAvailable: boolean;
    
    

    constructor(id: number,location: string,address:string,brand: string,model: string,year: number,pricePerDay: number,available: boolean,babyseats:number,gps:string)
    {
        this.id = id;
        this.location = location
        this.address = address;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.pricePerDay = pricePerDay;
        this.currentlyAvailable = available;
        this.babySeats = babyseats;
        this.gps = gps;
       
    }
}