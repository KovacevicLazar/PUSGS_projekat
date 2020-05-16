import { Car } from 'src/app/entities/car/car';

export class RentCar{
    id: number;
    name: string;
    address: string;
    description: string;
    mark: number;
    availableCars =  new Array<Car>();
    branches: string;
    adminId: number;

    constructor(id: number,name: string,address: string,description: string,mark: number,branches: string,adminId: number)
    {
        this.id = id;
        this.name = name;
        this.address = address;
        this.description = description;
        this.mark = mark;
        this.branches = branches;
        this.adminId = adminId;
       
    }

}