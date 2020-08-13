import { Role} from 'src/app/entities/Enums/role.enum';
import { Flight } from '../flight/flight';
import { Car } from '../car/car';

export class User{
    id : number
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
    role: Role;  
    password : string; 

    friends = new Array<User>();
    friendsRequests = new Array<User>();
    friendsSentRequests= new Array<User>();

    flightReservations =  new Array<Flight>();
    carReservations= new Array<Car>();
    
    
   
    constructor(id : number,name: string,surname : string, email: string,phone: string, address: string, role: Role, password : string)
    {
        this.id=id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.role = role;
        this.password=password;
    }
   
}