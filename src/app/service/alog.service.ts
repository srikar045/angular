import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlogService {

  constructor() { }
  validate(username:string,password:string){
    if(username=='srikar' && password=='1234'){
      localStorage.setItem('username','admin');
      return true;
    }
   
    return false;
    
  }
  logout(){
    localStorage.removeItem('username');
  }
}
