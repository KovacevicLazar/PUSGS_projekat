import { Car } from 'src/app/entities/car/car';

export class RentCar{
    id: number;
    name: string;
    address: string;
    description: string;
    mark: number;
    availableCars: string;

    constructor(id: number,name: string,address: string,description: string,mark: number,availableCars: string)
    {
        this.id = id;
        this.name = name;
        this.address = address;
        this.description = description;
        this.mark = mark;
        this.availableCars = availableCars;
    }

}