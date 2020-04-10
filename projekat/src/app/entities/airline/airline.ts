export class Airline{
    id: number;
    name: string;
    address: string;
    description: string;
    mark: number;
    destinations: string;

    constructor(id:number,name: string,address: string,description: string,mark: number,destinations: string)
    {
        this.id = id;
        this.name = name;
        this.address = address;
        this.description = description;
        this.mark = mark;
        this.destinations  = destinations;
    }
}