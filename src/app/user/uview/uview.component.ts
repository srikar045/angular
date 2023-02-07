import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MlapiService } from 'src/app/mlservice/mlapi.service';

@Component({
  selector: 'app-uview',
  templateUrl: './uview.component.html',
  styleUrls: ['./uview.component.css']
})
export class UviewComponent implements OnInit {

  constructor(private router:Router,
    private route:ActivatedRoute,
    private serv:MlapiService) { }
  roomdata:any=[];
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
}
