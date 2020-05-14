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

        const r1 = new RentCar(1,"Avis","New York","Opis 1",3.5,"Spisak 1 filijala");
        const r2 = new RentCar(2,"Hertz","Frankfurt","Opis 2",1.6,"Spusak 2 filijala");
        const r3 = new RentCar(3,"Alamo","Madrid","Opis 3",4,"Spisak 3 filijala");
       // const r4 = new RentCar(4,"Dollar","Moskow","Opis 4",5,"Spisak 4");
      //  const r5 = new RentCar(5,"RentalCars","Dortmund","Opis 5",3,"Spisak 5");
       // const r6 = new RentCar(6,"DriftyCars","Doha","Opis 6", 4.5,"Spisak 6");

       const c1 = new Car(1,"Sekovici","Solunska 5","Audi","A7",2017,198,true,1,"Yes");
       const c2 = new Car(1,"Tokio","New Street 22","Golf","5",2010,220,true,2,"No");
       const c3 = new Car(2,"Berlin","Tegel 46","Ford","Fiesta",1995,88,true,0,"yes");

       r1.availableCars.push(c1);
       r1.availableCars.push(c3);
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