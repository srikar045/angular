import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MlapiService } from 'src/app/mlservice/mlapi.service';
import { Room } from 'src/app/service/room.model';

@Component({
  selector: 'app-mlview',
  templateUrl: './mlview.component.html',
  styleUrls: ['./mlview.component.css']
})
export class MlviewComponent implements OnInit {
  abcd:Room=new Room();
  roomdata:any=[];

  constructor(private router:Router,
    private route:ActivatedRoute,
    private serv:MlapiService) { }

  ngOnInit(): void {
    this.rooms();
  }

rooms(){
  this.serv.roomlist().subscribe(
    (res)=>{this.roomdata=res;
    console.log(res);},
    (err)=>{console.log(err);}
  );
}

  book(data:any){
    this.router.navigate(['mlbook',data], {relativeTo: this.route.parent})
      }
}
