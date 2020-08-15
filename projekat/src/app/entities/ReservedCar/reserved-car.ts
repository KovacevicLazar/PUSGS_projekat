import { Car } from '../car/car';

export class ReservedCar {

    car: Car;
    numberOfDays : number;
    userEmail: string; //korisnik koji je rezervisao
    checkedInDate: Date;
    checkedOutDate: Date;
    returnedLocation: string;

    constructor(car: Car, numberOfDays : number, userEmail: string,checkedInDate: Date,returnedLocation: string,checkedOutDate: Date){
        this.car=car;
        this.numberOfDays=numberOfDays;
        this.userEmail=userEmail;
        this.checkedInDate = checkedInDate;
        this.returnedLocation = returnedLocation;

        this.checkedOutDate = checkedOutDate;
        let dan = this.checkedOutDate.getDay();
        this.numberOfDays = this.CalculateDay(this.checkedOutDate,this.checkedInDate);


    }
  CalculateDay(returnDate: Date,pickupDate: Date): number
  {
    
      var msec = returnDate.getTime() - pickupDate.getTime();
     var mins = Math.floor(msec / 60000);
     var hrs = Math.floor(mins / 60);
     var days = Math.floor(hrs / 24);
     
    if(days == 0)
    {
        days+=1;
    }
     return days;


    
    

  }

}
