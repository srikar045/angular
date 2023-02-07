import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from 'src/app/service/emp.service';
import { Room } from 'src/app/service/room.model';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-redit',
  templateUrl: './redit.component.html',
  styleUrls: ['./redit.component.css']
})
export class ReditComponent implements OnInit {
  sub=false;
  roomdata:any=[];
  data:Room=new Room();
  date:Date=new Date();

  roomId:number=0;
 
  constructor(private ser:EmpService,
    private router:Router,
    private  route:ActivatedRoute,
    private form:FormBuilder) { }

    RoomForm:FormGroup=new FormGroup({});

  ngOnInit(): void {
   this.roomId= this.route.snapshot.params['roomId'];
    this.ser.rget(this.roomId).subscribe(
      (response)=>{console.log(response);
        this.RoomForm.patchValue({
          name:response.name,
          floor:response.floor,
          capacity:response.capacity
        })
      },
      (error=>{console.log(error);}));
   
    this.RoomForm=this.form.group({
      name:['',Validators.required],
      floor:['',Validators.required],
      capacity:['',Validators.required]
    })
  }

  get c(){return this.RoomForm.controls;}

 
  onSubmit(){
    this.sub=true;

    // this.data.roomId=this.roomId;
    this.data.name=this.RoomForm.value.name;
    this.data.floor=this.RoomForm.value.floor;
    this.data.capacity=this.RoomForm.value.capacity;
    this.data.updated_by="SUPER_ADMIN";
    this.data.updated_on=this.date;

    this.ser.rupdate(this.roomId,this.data).subscribe(
      (res)=>{console.log(res);},
      (err=>{console.log(err);})
    );

    this.router.navigate(['/admin/roomview']);
  }
}
