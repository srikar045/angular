import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  public setRoles(roles: []) {
    // localStorage.setItem('roles', JSON.stringify(roles));
    sessionStorage.setItem('roles', JSON.stringify(roles));

  }

  public getRoles(): [] {
    // const role=localStorage.getItem('roles');
    const role=sessionStorage.getItem('roles');
    return JSON.parse(role!);
  }

  public setToken(jwtToken: string) {
    // localStorage.setItem('jwtToken', jwtToken);
    sessionStorage.setItem('jwtToken', jwtToken);

  }
 
  public getToken():string {
    return sessionStorage.getItem('jwtToken') as string;
    // return localStorage.getItem('jwtToken') as string;
  }

  public setEid(eid:number){
    // localStorage.setItem('eid',JSON.stringify(eid));
    sessionStorage.setItem('eid',JSON.stringify(eid));

  }

  public getEid():number{
    // let id=JSON.parse( localStorage.getItem('eid')as string);
    let id=JSON.parse( sessionStorage.getItem('eid')as string);
    return id;
  }

  public clear() {
    // localStorage.clear();
    sessionStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}
