import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlogService } from 'src/app/service/alog.service';
@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {
  msg:string='';
  class:boolean=true;
  constructor(private router:Router,private ser:AlogService) { }

  ngOnInit(): void {
  }
  onSubmit(form:any){
    var UserName=form.UserName;
    var password=form.password;
    var output=this.ser.validate(UserName,password);
    if(output==true){
      this.router.navigate(['/admin/main']);
    }else{
    this.msg='Invalid Username or Password';
    this.class=false;

    }
    }
}
