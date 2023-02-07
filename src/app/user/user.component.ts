import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private serv:UserServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }
logout(){
  this.serv.clear();
  this.router.navigate([''])
}
}
