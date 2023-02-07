import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MlapiService } from 'src/app/mlservice/mlapi.service';

@Component({
  selector: 'app-mlbooking',
  templateUrl: './mlbooking.component.html',
  styleUrls: ['./mlbooking.component.css']
})
export class MlbookingComponent implements OnInit {

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
    book1(data:any){
      this.router.navigate(['mlupdate',data], {relativeTo: this.route.parent})
  }

}
