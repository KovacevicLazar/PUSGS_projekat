import { Car } from '../car/car';

export class ReservedCar {

    car: Car;
    numberOfDays : number;
    userEmail: string; //korisnik koji je rezervisao

    constructor(car: Car, numberOfDays : number, userEmail: string){
        this.car=car;
        this.numberOfDays=numberOfDays;
        this.userEmail=userEmail;
    }
}
