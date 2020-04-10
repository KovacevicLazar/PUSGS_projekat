import { Injectable } from '@angular/core';
import { Car } from 'src/app/entities/car/car';

@Injectable({
    providedIn: 'root'
})

export class CarService{
    constructor() {}

    loadCars()
    {
        return this.mockedCars();
    }

    mockedCars(): Array<Car> {
        let allCars = new Array<Car>();
    
        const c1 = new Car(1, 'Audi', 'RS5', 2020, 245,true);
        const c2 = new Car(2, 'BMW', 'M5', 2017, 175,true);
        const c3 = new Car(3, 'Yugo', 'Koral 45', 1991, 25,true);
        const c4 = new Car(4, 'Mercedec', 'AMG GT63', 2019, 437,true);
        const c5 = new Car(5, 'Toyota', 'Yaris', 2010, 86,true);
    
        allCars.push(c1);
        allCars.push(c2);
        allCars.push(c3);
        allCars.push(c4);
        allCars.push(c5);
    
        return allCars;
      }
}