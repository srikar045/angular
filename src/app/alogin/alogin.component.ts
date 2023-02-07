import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlogService } from 'src/app/service/alog.service';
import { EmpService } from '../service/emp.service';
import { UserServiceService } from '../service/user-service.service';
@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {
  msg: string = '';
  class: boolean = true;
  constructor(private router: Router,
    private ser: AlogService,
    private serv: EmpService,
    private service: UserServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(form: any) {

    this.class = false;
    let login: any = { userName: form.userName, userPassword: form.userPassword };
    this.serv.login(login).subscribe(
      (res: any) => {
        console.log(res);
        // console.log(res.jwtToken);
        // console.log(res.employee.role);
        this.service.setRoles(res.employee.role);
        this.service.setToken(res.jwtToken);
        this.service.setEid(res.employee.eid);

        const role = res.employee.role[0].role;
        if (role === 'Admin') {
          this.router.navigate(['/admin/main']);
        } else if (role === 'Lead') {
          this.router.navigate(['/leads/mlhome']);
        } else if (role === 'Manager') {
          this.router.navigate(['/manager/mlhome']);
        } else if (role === 'Employee') {
          this.router.navigate(['/user/uhome']);
        } else {
          this.class = false;
          this.msg="Login Failed"
        }
      },
      (err) => {
        if (err != null) {
          this.class = false;
          this.msg="Login Failed";
        alert("Wrong Username or Password");

        }
        console.log(err);
      }
    );
  }
 my() {
    var x = (document.getElementById("myInput")as HTMLInputElement);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

}
/*var userName=form.userName;
    var userPassword=form.userPassword;
    var output=this.ser.validate(UserName,password);
    if(output==true){
      this.router.navigate(['/admin/main']);
    }else{
    this.msg='Invalid Username or Password';
    this.class=false;
    }*/