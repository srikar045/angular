import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmpService } from 'src/app/service/emp.service';
import { ModelService } from 'src/app/service/model.service';
import { User } from 'src/app/service/user.class/model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  submitted =false;
  
  isAddMode!: boolean;
  
  user:User=new User();
  date:Date=new Date();
  eid:number=0;
  role:any=[{role_id:0,role:''}];
  constructor(private form:FormBuilder,
    private ser:EmpService,
    private router:Router,
    private route:ActivatedRoute) { }

    RegForm:FormGroup=new FormGroup({});

  ngOnInit(): void {
    this.eid=this.route.snapshot.params['eid'];
  
    this.isAddMode=!this.eid;
    if (!this.isAddMode) {
    this.ser.get(this.eid).subscribe(
  (data)=>{this.user=data;console.log(data);
    this.role=data.role[0];
    console.log(this.role);
  this.RegForm.patchValue({
    firstname:data.fname,
    lastname:data.lname,
    gender:data.gender,
    email:data.email,
    mobile:data.mobile,
    username:data.username,
    password:data.password,
    Erole:data.role[0].role_id
  });
  },
  (error=>{console.log(error);})
);
}
    this.RegForm=this.form.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      gender:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.minLength(10),Validators.maxLength(10)]],
      username:['',Validators.required],
      password:['', [Validators.required,Validators.minLength(6)]],//{value:'',disabled:true}
      // role:[this.role[0].role_id],
      // roles:[this.role[0].role],
      Erole:['', !this.isAddMode ?Validators.required: Validators.nullValidator]
      // [{role_id:this.user.role[0].role_id,role:this.user.role[0].role}]
    });
  }
  get f(){return this.RegForm.controls;}
  
  onSubmit(){
    this.submitted=true;
    if(this.RegForm.invalid){
      return;
    }

    this.user.role[0].role_id=this.RegForm.value.Erole;

    this.user.fname=this.RegForm.value.firstname;
    this.user.lname=this.RegForm.value.lastname;
    this.user.gender=this.RegForm.value.gender;
    this.user.email=this.RegForm.value.email;
    this.user.mobile=this.RegForm.value.mobile;
    this.user.username=this.RegForm.value.username;
    this.user.password=this.RegForm.value.password;
    this.user.created_by=this.user.created_by;
    this.user.created_on=this.user.created_on;
    this.user.updated_by='ADMIN';
    this.user.updated_on=this.date;

    if (this.isAddMode) {
      this.createUser();
  } else {
      this.edit();
  }
   
  }
  edit(){
    this.ser.update(this.eid,this.user).subscribe(
      (response)=>{console.log(response);
      if(response==null){
        alert("username or Email exisit change it continue");
      }else{
        this.router.navigate(['/admin/view']);
      }
    },
    (error=>{console.log(error);}));
  
  }
  createUser(){
    this.ser.create(this.user).subscribe((response)=>
    {console.log(response);},
    (error=>{console.log(error);
     
      if(error=='Some thing is wrong'){
        alert("Change Username or Email to continue");
      }else if(error=='ok'){
       this.goto();
      }
    }));
  }
  goto(){
    this.router.navigate(['/admin/view']);
  }
}