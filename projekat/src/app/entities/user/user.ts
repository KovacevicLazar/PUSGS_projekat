import { Role} from 'src/app/entities/Enums/role.enum';
import { Flight } from '../flight/flight';
import { Car } from '../car/car';
import { ReservedFlight } from '../ReservedFlight/reserved-flight';
import { ReservedCar } from '../ReservedCar/reserved-car';

export class User{
    id : number
    name: string;
    surname: string;
    email: string; //jedinstven....
    phone: string;
    address: string;
    role: Role;  
    password : string;
    username: string; 

    friends = new Array<User>();
    friendsRequests = new Array<User>();
    friendsSentRequests= new Array<User>();

    flightReservations =  new Array<ReservedFlight>();
    carReservations= new Array<ReservedCar>();

    RequestsflightReservation =  new Array<ReservedFlight>(); //Zahtevi od prijatelja
    RequestscarReservation = new Array<ReservedCar>(); //Zahtevi od prijatelja
    
    
   
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