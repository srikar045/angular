import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot,UrlTree} from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpService } from '../service/emp.service';
import { UserServiceService } from '../service/user-service.service';
@Injectable({
  providedIn: 'root'
})
export class AdGuard implements CanActivate {
  constructor(private ser:UserServiceService,
    private router:Router,
    private serv:EmpService){}
  // canActivateChild(
  //   // childRoute: ActivatedRouteSnapshot,
  //   // state: RouterStateSnapshot
  //   ): boolean {
  //     if(localStorage.getItem('username')!=null){
  //       return true;
  //     }
  //       alert("you are not loged in")
  //       this.router.navigate(['']);
  //       return false;      
  // }


    // canActivate(
  //   // route: ActivatedRouteSnapshot,
  //   // state: RouterStateSnapshot
  //   ): boolean {
  //     if(localStorage.getItem('username')!=null){
  //       return true;
  //     }
      
  //     alert("you are not loged in")
  //     this.router.navigate(['']);
  //     return false;
      
  // }


  abc='1234';
  
// canActivateChild(
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ):boolean{
//   if(this.ser.getToken()!==null){
//     const role=route.data['roles'] as Array<string>;
//     if(role){
//       const match=this.serv.roleMatch(role);
//       if(match){
//         return true;
//       }else{
//         this.router.navigate(['/forbiden']);
//         return false;
//       }
//     }
//   } 
//   this.router.navigate(['/login']);
//   return false;
// }

// canActivate(
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ):
//   | Observable<boolean | UrlTree>
//   | Promise<boolean | UrlTree>
//   | boolean
//   | UrlTree {
//   if (this.ser.getToken() !== null) {
//     const role = route.data['roles'] as Array<string>;
// console.log(role);
//     if (role) {
//       const match = this.serv.roleMatch(role);
// console.log(match);
//       if (match) {
//         return true;
//       } else {
//        // this.router.navigate(['/forbiden']);
//         return false;
//       }
//     }
//   }

//   this.router.navigate(['/login']);
//   return false;
// }
canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree {
  if (this.ser.getToken() !== null) {
    const role = route.data['roles'] as Array<string>;

    if (role) {
      const match = this.serv.roleMatch(role);

      if (match) {
        return true;
      } else {
        this.router.navigate(['/forbidden']);
        return false;
      }
    }
  }

  this.router.navigate(['/login']);
  return false;
}
}
