import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MlapiService } from 'src/app/mlservice/mlapi.service';

@Component({
  selector: 'app-ubooking',
  templateUrl: './ubooking.component.html',
  styleUrls: ['./ubooking.component.css']
})
export class UbookingComponent implements OnInit {

  constructor(private router:Router,
    private route:ActivatedRoute,
    private serv:MlapiService){}
  Book:any =[];

  ngOnInit(): void {
    this.lsit();
  }
 lsit(){
  this.serv.booklist().subscribe(
    (res)=>{this.Book=res},
    (err)=>{console.log(err);}
  );
 }

}
