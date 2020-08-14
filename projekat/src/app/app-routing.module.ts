import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './componente/profile/profile.component';
import { FriendsComponent } from './componente/friends/friends.component';
import { AirlineComponent } from './componente/airlane/airline/airline.component';
import { StartingPageComponent } from './componente/starting-page/starting-page/starting-page.component'
import { SignInComponent } from './componente/sign-in/sign-in/sign-in.component';
import { SignUpComponent } from './componente/sign-up/sign-up/sign-up.component';
import {  RentACarComponent } from './componente/rent-a-car/rent-a-car/rent-a-car.component';
import { AirlineFilteredComponent } from './componente/airline-table/airline-filtered.component';
import { RentACarFilteredComponent} from './componente/rent-a-car-filtered/rent-a-car-filtered/rent-a-car-filtered.component';
import { pathToFileURL } from 'url';
import { RegisteredUserComponent } from './componente/registered-user/registered-user.component';

import {PageNotFoundComponent} from './componente/page-not-found/page-not-found/page-not-found.component'
import {RentCarDescriptionComponent} from './componente/rent-car-description/rent-car-description/rent-car-description.component';
import { AirlineDescriptionComponent } from './componente/airline-description/airline-description.component';
import { AddRcServisComponent} from './componente/add-rc-servis/add-rc-servis/add-rc-servis.component';
import { AddAirlineComponent} from './componente/add-airline/add-airline/add-airline.component';
import { SeatReservationComponent } from './componente/seat-reservation/seat-reservation.component';
import { HistoryOfReservationComponent } from './componente/history-of-reservation/history-of-reservation.component';
import { AirlineDestinationsComponent } from './componente/airline-destinations/airline-destinations/airline-destinations.component';
import { RentCarBranchComponent } from './componente/rent-car-branch/rent-car-branch/rent-car-branch.component';
import { MyRcServisComponent } from './componente/my-rc-servis/my-rc-servis/my-rc-servis.component';
import { MyCarListComponent } from './componente/my-car-list/my-car-list/my-car-list.component';
import { ChangeRcInfoComponent } from './componente/change-rc-info/change-rc-info/change-rc-info.component';
import { MyAirlineServisComponent } from './componente/my-airline-servis/my-airline-servis.component';
import { MyFlightListComponent } from './componente/my-flight-list/my-flight-list.component';
import { ListOfAirlinesComponent } from './componente/list-of-airlines/list-of-airlines.component';
import { ListOfCarCompaniesComponent } from './componente/list-of-car-companies/list-of-car-companies.component';
import { AdminAddCarComponent } from './componente/admin-add-car/admin-add-car.component';
import { AdminAddFlightComponent } from './componente/admin-add-flight/admin-add-flight.component';

const routes: Routes = [
  {
    path: "",
    component: StartingPageComponent
  },
  {
    path: "regus",
    children: [
      { path: "", component: RegisteredUserComponent },
      { path: ":id", component: RegisteredUserComponent},
      { path: ":id/profile", component: ProfileComponent },
      { path: ":id/friends", component: FriendsComponent },
      { path: ":id/myRCservis",
        children:[
         { path: "", component: MyRcServisComponent},
         { path:"changeInfo",component: ChangeRcInfoComponent }
        ]
      },
      { path: ":id/admin-add-car", component: AdminAddCarComponent },
      { path: ":id/myCarList", component: MyCarListComponent},

      { path: ":id/admin-add-flight", component: AdminAddFlightComponent },



      { path: ":id/myAirLineService",
      children:[
       { path: "", component: MyAirlineServisComponent},
       //{ path:"changeInfo",component: ChangeRcInfoComponent }
      ]
    },
    { path: ":id/myFlightList", component: MyFlightListComponent},

    
      { path: ":id/airline", 
      children:[
        {path: "" , component: AirlineComponent},
        {path: ":flightID" , component: SeatReservationComponent}
      ]
      },
      { path: ":id/history-of-reservation", component: HistoryOfReservationComponent},
      {  path: ":id/rent-a-car", component: RentACarComponent},
      { path: ":id/all-rc-servis",component: ListOfCarCompaniesComponent},
      { path: ":id/all-airline",component: ListOfAirlinesComponent},
      { path: ":id/add-airline",component: AddAirlineComponent},
      { path: ":id/add-rcServis",component: AddRcServisComponent}
      
    ]
  },

  {
    path: "nonreg",
    children: [
     { path : ":idAir/airDesc", component: AirlineDescriptionComponent },
     { path : ":idAir/airDest",component: AirlineDestinationsComponent}
    ]
  },

  { path: "nonregRC",
  children: [
    { path : ":idRC/rentcDesc",component: RentCarDescriptionComponent },
    { path : ":idRC/rentCarDest",component: RentCarBranchComponent}
  ]
},


 
  {
    path: "airline",
    component: AirlineComponent,
    children: [
      { path: "", component: AirlineComponent },
      { path: ":id", component: RegisteredUserComponent},
      { path: "airline-filtered", component: AirlineFilteredComponent, }
    ]
  },



  {
    path: "airline-table",
    component: AirlineFilteredComponent,
  },
  {
    path: "rent-a-car-table",
    component: RentACarFilteredComponent,
  },



  {
    path: "airline-filtered",
    component: AirlineFilteredComponent,
  },
  {
    path: "rent-a-car",
    component: RentACarComponent,
    children: [
    {
      path: "rent-a-car-filtered",
      component: RentACarFilteredComponent, 
    }
   ]
  },
  {
    path: "rent-a-car-filtered",
    component: RentACarFilteredComponent, 
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent,
  },
  {
    path: "rent-a-car",
    component: RentACarComponent
  },
  

  {
    path: "profile",
    children: [
      { path: "", component: ProfileComponent },
      { path: ":id", component: ProfileComponent},
      
    ]
  },
  {
    path: "friends",
    component: FriendsComponent
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
