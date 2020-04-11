import { Injectable } from '@angular/core';

import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';


@Injectable({
    providedIn: 'root'
})

export class RentCarService{
    constructor() {}

    

    loadRentCars() {
        
        return this.mockedRentCar();

    }

    mockedRentCar() : Array<RentCar>
    {
        let allRentCar = new Array<RentCar>();

        const r1 = new RentCar(1,"Auta Loznica","Loznica BB","najjeftiniji u gradu",5,"audi, honda");
        const r2 = new RentCar(2,"AutoKuca Tuzla","Pap Pavla 2","Najbolji modeli",4,"sva su slobodna");

        allRentCar.push(r1);
        allRentCar.push(r2);

        return allRentCar;
    }
   

}