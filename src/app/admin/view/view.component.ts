import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from 'src/app/service/emp.service';
import { ModelService } from 'src/app/service/model.service';
import { User } from 'src/app/user.class/model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  userdata: any = [];
userdatas:any;
  constructor(private ser: EmpService,
    private router: Router,
    private serv: ModelService) { }
  
    // user: User = new User();
  
    ngOnInit(): void {
     this.data();
  }
  
  add() {
    this.router.navigate(['admin/addUser'])
  }

 id:number=0;
  search(){
    
    this.ser.get(this.id).subscribe(
      (res)=>{this.userdatas=res;},
      (err)=>{console.log(err);}
    );
  }
  
  data() {
    
    this.userdatas=undefined;

    this.ser.list().subscribe(
      (res) => { this.userdata = res; },
      (err) => { console.log(err); }
    );
  }

  delete(id: number) {
    this.ser.delete(id).subscribe((id) => {
      id = id
    },
      (error => { console.log(error); }));
    window.location.reload();
  }

  edit(data: any) {
    this.serv.id(data);
    this.router.navigate(['/admin/editUser'])
  }
}