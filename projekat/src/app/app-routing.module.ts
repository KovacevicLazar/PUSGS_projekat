import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './componente/profile/profile.component';
import { FriendsComponent } from './componente/friends/friends.component';


const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "friends",
    component: FriendsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
