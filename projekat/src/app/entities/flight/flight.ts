export class Flight {
    
    id: number;
    flyingfrom : string;
    flyingTo: string;
    dateDepart: Date;
    dateArrival: Date;
    flightDuration: Date;
    flightDistance:number;
    numberTransit: number;
    Transitlocations: Array<string>;
    vacantSeats: number;
    busySeats: number;
    ticketPrice: number;


    constructor(id: number, flyingfrom : string,flyingTo: string,dateDepart: Date,dateArrival: Date,flightDistance:number,numberTransit: number,Transitlocations: Array<string>,vacantSeats: number,ticketPrice: number){
       
        this.id=id;

        this.flyingfrom=flyingfrom;
        this.flyingTo=flyingTo;
        this.dateDepart=dateDepart;
        this.dateArrival=dateArrival;
        this.flightDuration= this.calculateDuration(dateArrival,dateDepart);
        this.flightDistance=flightDistance;
        this.numberTransit=numberTransit;
        this.Transitlocations=Transitlocations;
        this.vacantSeats=vacantSeats;
        this.ticketPrice=ticketPrice;
    }

    calculateDuration(dateArrival: Date,dateDepart: Date): Date
    {
        var msec = dateArrival.getTime() - dateDepart.getTime();
        var mins = Math.floor(msec / 60000);
        var hrs = Math.floor(mins / 60);
        var days = Math.floor(hrs / 24);
        mins = mins % 60;
        //hrs = hrs % 24; necemo pisati dane posebno, ti dani ostaju u satima
        //days = days % 365;

        //var yrs = Math.floor(days / 365);
        return new Date(0,0,0,hrs,mins,0,0)
    }

}
