import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpService } from 'src/app/service/emp.service';
import { ModelService } from 'src/app/service/model.service';
import { User } from 'src/app/user.class/model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  submitted =false;
  userdata:any=[];
  user:User=new User();
  date:Date=new Date();

  eid:number=0;
  firstname:string='';
  lastname:string='';
  gender:string='';
  email:string='';
  mobile:number=0;
  username:string='';
  password:string='';

  constructor(private form:FormBuilder,
    private ser:EmpService,
    private router:Router,
    private serv:ModelService) { }

    RegForm:FormGroup=new FormGroup({});

  ngOnInit(): void {
    this.preset();
    this.RegForm=this.form.group({
      firstname:[this.firstname,Validators.required],
      lastname:[this.lastname,Validators.required],
      gender:[this.gender,Validators.required],
      email:[this.email,[Validators.required,Validators.email]],
      mobile:[this.mobile,[Validators.minLength(10),Validators.maxLength(10)]],
      username:[this.username,Validators.required],
      password:[this.password,[Validators.required,Validators.minLength(6)]]
    });
  }
  get f(){return this.RegForm.controls;}
  
  preset(){
    this.eid=this.serv.uid;
    this.firstname=this.serv.fname;
    this.lastname=this.serv.lname;
    this.gender=this.serv.gender;
    this.email=this.serv.email;
    this.mobile=this.serv.mobile;
    this.username=this.serv.uname;
    this.password=this.serv.password;
  }
  onSubmit(){
    this.submitted=true;
    if(this.RegForm.invalid){
      return;
    }
    this.user.fname=this.RegForm.value.firstname;
    this.user.lname=this.RegForm.value.lastname;
    this.user.gender=this.RegForm.value.gender;
    this.user.email=this.RegForm.value.email;
    this.user.mobile=this.RegForm.value.mobile;
    this.user.username=this.RegForm.value.username;
    this.user.password=this.RegForm.value.password;
    this.user.created=this.serv.cby;
    this.user.created=this.serv.cdate;
    this.user.updatedBy='ADMIN';
    this.user.updated=this.date;

    this.ser.update(this.eid,this.user).subscribe((response)=>
    {console.log(response);},
    (error=>{console.log(error);}));

    this.router.navigate(['/admin/view']);
  }


}
