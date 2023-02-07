import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MlapiService } from 'src/app/mlservice/mlapi.service';

@Component({
  selector: 'app-mlmy',
  templateUrl: './mlmy.component.html',
  styleUrls: ['./mlmy.component.css']
})
export class MlmyComponent implements OnInit {
  Book:any =[];
  Books:any =[];

  constructor(private router:Router,
    private route:ActivatedRoute,
    private serv:MlapiService) { }
eid:number=0;
  ngOnInit(): void {
    this.eid=Number(sessionStorage.getItem('eid'));
    this.serv.mybook(this.eid).subscribe(
      (res)=>{this.Book=res;
      if(res==null){
        alert("No Bookings");
      }},
      (err)=>{console.log(err);}
    );   
  }
 
      book1(data:any){
        this.router.navigate(['mlupdate',data], {relativeTo: this.route.parent})
    }
delete(id:any){
  this.serv.del(id).subscribe(
    (res)=>{console.log(res);
    },
    (err)=>{console.log(err);}
  );
  alert("Data Deleted");
    window.location.reload();
}
}
