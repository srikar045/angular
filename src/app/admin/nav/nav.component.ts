import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlogService } from 'src/app/service/alog.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private ser:AlogService,private router:Router) { }
  title='hello all';
  ngOnInit(): void {
  }
logout(){
this.router.navigate(['']);
this.ser.logout;
}
}
