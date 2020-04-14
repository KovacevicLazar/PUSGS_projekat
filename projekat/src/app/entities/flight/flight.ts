export class Flight {
    
    id: number;
    flyingfrom : string;
    flyingTo: string;
    dateDepart: Date;
    dateReturn: Date;
    flightDuration: Date;
    flightDistance:number;
    numberStops: number;
    locationsStops: Array<string>;
    vacantSeats: number;
    busySeats: number;
    ticketPrice: number;


    constructor(id: number, flyingfrom : string,flyingTo: string,dateDepart: Date,dateReturn: Date,flightDistance:number,numberStops: number,locationsStops: Array<string>,vacantSeats: number,ticketPrice: number){
       
        this.id=id;

        this.flyingfrom=flyingfrom;
        this.flyingTo=flyingTo;
        this.dateDepart=dateDepart;
        this.dateReturn=dateReturn;
        this.flightDuration= this.calculateDuration(dateReturn,dateDepart);
        this.flightDistance=flightDistance;
        this.numberStops=numberStops;
        this.locationsStops=locationsStops;
        this.vacantSeats=vacantSeats;
        this.ticketPrice=ticketPrice;
    }

    calculateDuration(dateReturn: Date,dateDepart: Date): Date
    {
        var msec = dateReturn.getTime() - dateDepart.getTime();
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
