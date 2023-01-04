import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot} from '@angular/router';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdGuard implements CanActivateChild {
  constructor(private router:Router ){}
  canActivateChild(
    // childRoute: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
    ): boolean {
      if(localStorage.getItem('username')!=null){
        return true;
      }
        alert("you are not loged in")
        this.router.navigate(['']);
        return false;
      
  }
  
  canActivate(
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
    ): boolean {
      if(localStorage.getItem('username')!=null){
        return true;
      }
      
      alert("you are not loged in")
      this.router.navigate(['']);
      return false;
      
  }
 
}
