import { Injectable } from '@angular/core';
import { Car } from 'src/app/entities/car/car';
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

        const r1 = new RentCar(1,"Avis","New York","Opis 1",3.5);
        const r2 = new RentCar(2,"Hertz","Frankfurt","Opis 2",1.6);
        const r3 = new RentCar(3,"Alamo","Madrid","Opis 3",4);
       // const r4 = new RentCar(4,"Dollar","Moskow","Opis 4",5,"Spisak 4");
      //  const r5 = new RentCar(5,"RentalCars","Dortmund","Opis 5",3,"Spisak 5");
       // const r6 = new RentCar(6,"DriftyCars","Doha","Opis 6", 4.5,"Spisak 6");

       const c1 = new Car(1,"Sekovici","Solunska 5","Audi","A7",2017,198,true,1);
       const c2 = new Car(1,"Tokio","New Street 22","Golf","5",2010,220,true,1);

       r1.availableCars.push(c1);
       r2.availableCars.push(c2);



        allRentCar.push(r1);
        allRentCar.push(r2);
        allRentCar.push(r3);
        //allRentCar.push(r4);
        //allRentCar.push(r5);
       // allRentCar.push(r6);

        return allRentCar;
    }
   

}