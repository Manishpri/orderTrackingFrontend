import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { OrderserviceService } from './orderservice.service'

@Injectable({
  providedIn: 'root'
})
export class OrderguardGuard implements CanActivate {
  constructor(private router:Router,private service : OrderserviceService){

  }
  canActivate():boolean{
    if(this.service.isLoggedIn()){
      return true
    }else{
      this.router.navigate(['/login']);
      return false
    }
  }
  
}
