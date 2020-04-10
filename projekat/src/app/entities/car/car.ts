export class Car{
    id: number;
    brand: string;
    model: string;
    year: number;
    pricePerDay:number;
    available: boolean;

    constructor(id: number,brand: string,model: string,year: number,pricePerDay: number,available: boolean)
    {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.pricePerDay = pricePerDay;
        this.available = available;
    }
}