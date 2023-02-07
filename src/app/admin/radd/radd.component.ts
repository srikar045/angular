import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpService } from 'src/app/service/emp.service';
import { Room } from 'src/app/service/room.model';

@Component({
  selector: 'app-radd',
  templateUrl: './radd.component.html',
  styleUrls: ['./radd.component.css']
})
export class RaddComponent implements OnInit {

  sub=false;
  roomdata:any=[];
  room:Room=new Room();
  date:Date=new Date();

  constructor(private form:FormBuilder,
    private router:Router,
    private serv:EmpService) { }

    RoomForm:FormGroup=new FormGroup({});

  ngOnInit(): void {
    this.RoomForm=this.form.group({
      // id:['',Validators.required],
      name:['',Validators.required],
      floor:['',Validators.required],
      capacity:['',Validators.required]
    });
  }

  get c(){return this.RoomForm.controls;}

  onSubmit(){
    this.sub=true;
    if(this.RoomForm.invalid){
      return;
    }
    // this.room.id      =this.RoomForm.value.id;
    this.room.name    =this.RoomForm.value.name;
    this.room.floor   =this.RoomForm.value.floor;
    this.room.capacity=this.RoomForm.value.capacity;

    console.log(this.room);
    this.serv.rcreate(this.room).subscribe(
      (res)=>{console.log(res);},
      (err=>{console.log(err);
      if(err=='Some thing is wrong'){
        alert("Room Name Already in USE");
      }else if(err=='ok'){
        this.router.navigate(['/admin/roomview']);}
      }));

    // this.router.navigate(['/admin/roomview']);  
  }

}
