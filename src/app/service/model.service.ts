import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }
  uid:number=0;
  fname:string='';
  lname:string='';
  gender:string='';
  email:string='';
  mobile:number=0;
  uname:string='';
  password:string='';
  cby:string='';
  cdate:any='';
  uby:string='';
  udate=new Date();


  id(data:any){
    this.uid=data.eid;
    this.fname=data.fname;
    this.lname=data.lname;
    this.gender=data.gender;
    this.email=data.email;
    this.mobile=data.mobile;
    this.uname=data.username;
    this.password=data.password;
    this.cby=data.created_by;
    this.cdate=data.created_on;
    this.uby=data.updated_by;
    this.udate=data.updated_on;
  }
}
