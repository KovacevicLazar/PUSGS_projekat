enum Role{
    Registred,
    CarAdmin,
    AirlineAdmin,
    SystemAdmin,
}  

export class User{
   
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
    role: Role;   

    constructor(name: string,surname : string, email: string,phone: string, address: string, role: Role)
    {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.role = role;
    }
   
}