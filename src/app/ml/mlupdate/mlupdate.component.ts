import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MlapiService } from 'src/app/mlservice/mlapi.service';
import { Booking } from 'src/app/service/booking.model';

@Component({
  selector: 'app-mlupdate',
  templateUrl: './mlupdate.component.html',
  styleUrls: ['./mlupdate.component.css']
})
export class MlupdateComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private serv: MlapiService) { }
  title='';
  starttime:any;
  endtime :any;
  id: number = 0;
  booking: Booking = new Booking();
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['bid']);
  }
  titlechange() {
   this.booking.title=this.title;
   this.serv.tedit(this.id,this.booking).subscribe(
    (res)=>{console.log(res);},
    (err)=>{console.log(err);}
    );
    this.router.navigate(['mlbooking'], {relativeTo: this.route.parent})

  }
  timechange() {
   this.booking.start=this.starttime;
   this.booking.end=this.endtime;
   this.booking.eid=Number(sessionStorage.getItem('eid'));
    this.serv.tteditt(this.id,this.booking).subscribe(
      (res)=>{console.log(res);},
      (err)=>{console.log(err);}
      );
    this.router.navigate(['mlbooking'], {relativeTo: this.route.parent})

  }
}
