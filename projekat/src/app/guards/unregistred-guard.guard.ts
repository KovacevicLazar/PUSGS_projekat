import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnregistredGuardGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userRole = JSON.parse(localStorage.getItem('sessionUserRole'));
    if (userRole === 'NonRegistred' || userRole ==='Registred') {
      return true;
    }
      
    alert('Da biste pristupili ovom linku, morate imati ulogu NonRegistred ili Registred!');
    return ;
  }
  
}
