import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlogService } from 'src/app/service/alog.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private ser:AlogService,private router:Router,private serv:UserServiceService) { }
  title='hello all';
  ngOnInit(): void {
  }
logout(){
  this.serv.clear();
  this.router.navigate(['']);
}
}
