import { Role} from 'src/app/entities/Enums/role.enum';

export class User{
   
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
    role: Role;  
    password : string; 
    
    
   
    constructor(name: string,surname : string, email: string,phone: string, address: string, role: Role, password : string)
    {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.role = role;
        this.password=password;
    }
   
}