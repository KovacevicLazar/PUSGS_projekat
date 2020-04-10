import { Injectable } from '@angular/core';
import { Car } from 'src/app/entities/car/car';
import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';
import { CarService } from 'src/app/services/car-service/car-service';

@Injectable({
    providedIn: 'root'
})

export class RentCarService{
    constructor() {}

    carService: CarService;

    loadRentCars() {
        console.log("Ucitavanje Rent-car kompanija");

    }
    makeList() : Array<Car>
    {
        let NizZaServis = new Array<Car>();

        NizZaServis = this.carService.loadCars();
        return NizZaServis;
    }

    mockedRentCarServices(): Array<RentCar> {
        let rentCarServicesList = new Array<RentCar>();
        let rentCarServiceCars = new Array<Car>();

        rentCarServiceCars = this.makeList();

        
    
        const c1 = new RentCar(1,"AutoServis BG","Beograd","najjeftinija auta",4,rentCarServiceCars);
        rentCarServicesList.push(c1);
       
    
        return rentCarServicesList;
      }

}