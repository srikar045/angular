import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from 'src/app/service/emp.service';
import { Room } from 'src/app/service/room.model';
import { RoomService } from 'src/app/service/room.service';
import { UserServiceService } from 'src/app/service/user-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-rview',
  templateUrl: './rview.component.html',
  styleUrls: ['./rview.component.css']
})
export class RviewComponent implements OnInit {
show:any=false;
  rdata:any=[];
  role:any=[];
abcd:Room=new Room();
  constructor(private ser:EmpService
    ,private router:Router
    ,private serv:RoomService,
    private getr:UserServiceService ) { }

  ngOnInit(): void {
    this.data();
  //  this.role=sessionStorage.getItem('roles');
  this.role=this.getr.getRoles();
  console.log(this.role);
  if(this.role[0].role=='Admin'){
    this.show=true;
  }
  }

  data(){
    this.ser.rlist().subscribe(
      (res)=>{this.rdata=res;},
      (err)=>{console.log(err);}
    );
  }

  edit(data:any){
    this.serv.set(data);
    this.router.navigate(['/admin/roomedit',data]);
  }

  book(data:any){
    this.router.navigate(['/admin/book',data]);

  }
//   id:number=0;
//   delete(data:number){
// this.id=data;
// this.handleWarningAlert(this.id);
//   }
  
// Custom Buttons
handleWarningAlert(roomId:any) {
  
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this data!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it',
  }).then((result) => {

    if (result.isConfirmed) {
        this.ser.rdelete(roomId).subscribe((id) => {
          id = id
        },
          (error => { console.log(error); }));
        window.location.reload();
    } else if (result.isDismissed) {
      console.log('Clicked No, File is safe!');
    }
  })

}
}
