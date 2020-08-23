import { Injectable } from '@angular/core';
import { Car } from 'src/app/entities/car/car';
import { RentCar } from 'src/app/entities/rent-a-car/rent-a-car';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { ReservedCar } from 'src/app/entities/ReservedCar/reserved-car';


@Injectable({
    providedIn: 'root'
})

export class RentCarService{
    constructor(private http: HttpClient) { }

    readonly BaseURI = 'http://localhost:51716/api';

    

    GetCarForCompany()
    {
        return this.http.get(this.BaseURI + '/RentCar/GetCarForCompany');
    }

    GetCarWithId(id: number)
    {
        return this.http.get(this.BaseURI + '/RentCar/GetCarWithId/' + id);
    }

    SaveChangesOnCar(car : Car)
    {
        let body = {
            Location : car.location,
            PricePerDay : car.pricePerDay,
            NumberOfSeats : car.numberOfSeats,
            BabySeats : car.babySeats,
            Brand: car.brand,
            Year: car.year,
            Model: car.model
            
        }

        return this.http.post(this.BaseURI + '/RentCar/SaveChangesOnCar/' + car.id, body);
    }




    loadRentCars() {
        
        return this.mockedRentCar();

    }

    AddCar(car : Car)
    {
        let body = {
            Location : car.location,
            PricePerDay : car.pricePerDay,
            NumberOfSeats : car.numberOfSeats,
            BabySeats : car.babySeats,
            Brand: car.brand,
            Year: car.year,
            Model: car.model
            
        }

        return this.http.post(this.BaseURI + '/RentCar/AddingCar', body);
    }

    DeleteCarFromList(id: number)
    {
        return this.http.get(this.BaseURI + '/RentCar/DeleteCarFromList/' + id);
    }

    GetCompanyInfo()
    {
        return this.http.get(this.BaseURI + '/RentCar/GetCompanyInfo'); 
    }

    GetAllCarCompanies()
    {
        return this.http.get(this.BaseURI + '/RentCar/GetAllCarCompanies');
    }

    GetDescription(id: number)
    {
        return this.http.get(this.BaseURI + '/RentCar/GetDescription/' + id);
    }

    ShowBranches(id: number)
    {
        return this.http.get(this.BaseURI + '/RentCar/ShowBranches/' + id);
    }

    GetSearchedCars(location: string,pickupDate : Date,babyseats: number,numberOfSeats : number)
    {
        if(location == "")
        {
            location = "_";
        }
        return this.http.get(this.BaseURI + '/RentCar/GetSearchedCars/' + location+'/'+pickupDate.toDateString().replace(' ','_')+'/'+babyseats+'/'+numberOfSeats);
    }



    SaveChangeInfo(rentcar: RentCar)
    {
        var body = {
            Description: rentcar.description,
            CompanyName : rentcar.name,
            Id: rentcar.id,
            Adress: rentcar.address
        }

        return this.http.post(this.BaseURI + '/RentCar/SaveChangeInfo', body);
    }

    mockedRentCar() : Array<RentCar>
    {
        let allRentCar = new Array<RentCar>();

        const r1 = new RentCar(1,"Avis","New York","Opis 1",3.5);
        const r2 = new RentCar(2,"Hertz","Frankfurt","Opis 2",1.6);
       
       // const r4 = new RentCar(4,"Dollar","Moskow","Opis 4",5,"Spisak 4");
      //  const r5 = new RentCar(5,"RentalCars","Dortmund","Opis 5",3,"Spisak 5");
       // const r6 = new RentCar(6,"DriftyCars","Doha","Opis 6", 4.5,"Spisak 6");

    //    const c1 = new Car(1,"Sekovici","Solunska 5","Audi","A7",2017,198,true,1,"Yes");
    //    const c2 = new Car(2,"Tokio","New Street 22","Golf","5",2010,220,true,2,"Yes");
    //    const c3 = new Car(3,"Berlin","Tegel 46","Ford","Fiesta",1995,88,true,0,"yes");

    //    r1.availableCars.push(c1);
    //    r1.availableCars.push(c2);
    //    r2.availableCars.push(c3);



        // allRentCar.push(r1);
        // allRentCar.push(r2);
        
        //allRentCar.push(r4);
        //allRentCar.push(r5);
       // allRentCar.push(r6);

        return allRentCar;
    }

    CarReservation(reservation : ReservedCar)
    {

        var body = {
            CarId: reservation.car.id,
            PickupDate: reservation.checkedInDate,
            ReturnDate : reservation.checkedOutDate,
            NumberOfDays : reservation.numberOfDays
        }
        return this.http.post(this.BaseURI + '/RentCar/CarReservation', body);
    }
   

}