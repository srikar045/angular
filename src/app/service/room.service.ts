import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }
  data:any=[];

  roomId:any;
  name:string='';
  floor:number=0;
  capacity:number=0;
  created_by:string='';
  created_on:any;
  updated_by:string='';
  updated_on:any;

  set(getdata:any){
    this.roomId=getdata.roomId;
    this.name=getdata.name;
    this.floor=getdata.floor;
    this.capacity=getdata.capacity;
    this.created_by=getdata.created_by;
    this.created_on=getdata.created_on;
    this.updated_by=getdata.updated_by;
    this.updated_on=getdata.updated_on;

  }

}
