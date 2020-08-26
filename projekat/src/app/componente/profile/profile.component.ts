import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entities/user/user';
import { UserService } from 'src/app/services/user-service/user.service';
import { NgForm } from '@angular/forms';
import { IfStmt } from '@angular/compiler';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: number;
  user: User;


  name="";
  surname="";
  phoneNumber="";
  address="";
  confirmpassword = "";
  currentPassword = "";
  newpassword ="";
  checkBox =false;
  
  constructor(private userService: UserService, private route: ActivatedRoute) {
   
    let user=this.userService.GetUserProfileInfo().subscribe((res: any) => {
      this.user = new User(res.userinfo.username,res.userinfo.name,res.userinfo.surname,res.userinfo.email,res.userinfo.phoneNumber,res.userinfo.address,0,"");

      this.name=this.user.name;
      this.surname=this.user.surname;
      this.phoneNumber=this.user.phone;
      this.address=this.user.address;
    });
   }

  ngOnInit(): void {
  }

  saveChanges() : void{
    let successful= true;
    if(this.checkBox==true && this.confirmpassword.trim()==""){
      alert('Za promenu podataka morate potvrditi vasu lozinku');
      successful= false;
    }
    else if(this.name.trim()=="" || this.phoneNumber =="" || this.surname.trim()=="" || this.address.trim()=="" ){
      alert('Obavezna polja moraju biti popunjena');
      successful= false;
    }
    else if(this.newpassword.length <= 6 && this.checkBox==true){
      alert('Sifra mora imati minimum 6 karaktera');
      successful= false;
    }
    else if(this.checkBox==true && this.newpassword != this.confirmpassword){
      alert('Sifre se ne podudaraju');
      successful= false;
    }
    else{
     //proveriti da li je mejl slobodan
    }

    if(successful){
      this.user.password=this.currentPassword;
      this.user.name=this.name;
      this.user.surname=this.surname;
      this.user.phone=this.phoneNumber;
      this.user.address=this.address
      this.userService.SaveProfileInfoChanges(this.user,this.newpassword,this.confirmpassword).subscribe((res:any)=>{
        alert(res.message);
      });
    }
  }
  
}
