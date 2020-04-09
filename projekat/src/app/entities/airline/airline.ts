export class Airline{
    name: string;
    address: string;
    description: string;
    mark: number;
    destinations: string;

    constructor(name: string,address: string,description: string,mark: number,destinations: string)
    {
        this.name = name;
        this.address = address;
        this.description = description;
        this.mark = mark;
        this.destinations  = destinations;
    }}