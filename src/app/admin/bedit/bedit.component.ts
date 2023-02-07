import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from 'src/app/service/emp.service';
import {MatExpansionModule} from '@angular/material/expansion';
import { Booking } from 'src/app/service/booking.model';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-bedit',
  templateUrl: './bedit.component.html',
  styleUrls: ['./bedit.component.css']
})
export class BeditComponent implements OnInit {
  panelOpenState = false;
  constructor(private ser:EmpService,
    private router:Router,
    private  route:ActivatedRoute,
    private serv:UserServiceService) { }
rid:number=0;
floor:number=0;
emp:number=0;
bid:number=0;
title='';
fname:string='';
lname:string='';

data:any=[];
booking:Booking=new Booking();
start=null;
end:any;


ngOnInit(): void {
  
    this.bid=this.route.snapshot.params['bid'];
    this.ser.bookid(this.bid).subscribe(
      (res)=>{this.data=res;
        this.title=res.title;
        this.rid=res.rid.roomId;
        this.floor=res.rid.floor;
        this.emp=res.eid.eid;
        this.fname=res.eid.fname;
        this.lname=res.eid.lname;
        this.start=res.start;
        this.end=res.end;
      },
      (error=>{console.log(error)})
    );
  }

  edit(){
    this.booking.title=this.title;
    // this.booking.upated= localStorage.getItem('eid')as string;
    this.booking.eid= Number(sessionStorage.getItem('eid')as string);
    this.ser.bedit(this.bid,this.booking).subscribe(
      (res)=>{console.log(res);window.location.reload()},
      (error=>{console.log(error);})
    );
  }

  edittime(){
   this.booking.title=this.title;
   this.booking.start=this.start;
   this.booking.end=this.end;
  //  this.booking.upated=localStorage.getItem('eid')as string;
   this.booking.eid=Number(sessionStorage.getItem('eid')as string);
   this.ser.beditt(this.bid,this.booking).subscribe(
    (res)=>{console.log(res);window.location.reload()},
    (err=>{console.log(err);
    alert(err)})
   );
  console.log(this.start+"         "+ this.end);
  }

}
