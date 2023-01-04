import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpService } from 'src/app/service/emp.service';
import { ModelService } from 'src/app/service/model.service';
import { User } from 'src/app/user.class/model';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  submitted =false;
  userdata:any=[];
  user:User=new User();
  date:Date=new Date();

  constructor(private form:FormBuilder,
    private ser:EmpService,
    private router:Router) { }

  RegForm:FormGroup=new FormGroup({});

  ngOnInit(): void {
  this.RegForm=this.form.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    gender:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    mobile:['',[Validators.minLength(10),Validators.maxLength(10)]],
    username:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(6)]]
  });
  }
  get f(){return this.RegForm.controls;}

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
    this.ser.create(this.user).subscribe((response)=>
    {console.log(response);},
    (error=>{console.log(error);}));
    this.router.navigate(['/admin/view']);
  }
}