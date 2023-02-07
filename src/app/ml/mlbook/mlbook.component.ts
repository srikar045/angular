import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MlapiService } from 'src/app/mlservice/mlapi.service';
import { Booking } from 'src/app/service/booking.model';

@Component({
  selector: 'app-mlbook',
  templateUrl: './mlbook.component.html',
  styleUrls: ['./mlbook.component.css']
})
export class MlbookComponent implements OnInit {

  constructor(private router:Router,
    private route:ActivatedRoute,
    private serv:MlapiService) { }
    book: Booking = new Booking();

  title= '';
  start:any;
  end:any;

id:number=0;

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.params['rid']);
    this.Addnewrow();
  }
  items!: FormArray;
  reactform = new FormGroup({
    code: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    deladdress: new FormArray([])
  });

  Addnewrow() {
    this.items = this.reactform.get("deladdress") as FormArray;
    this.items.push(this.Genrow())
  }
  Removeitem(index:any){
    this.items = this.reactform.get("deladdress") as FormArray;
    this.items.removeAt(index)
  }
  get deladdress(){
    return this.reactform.get("deladdress") as FormArray;
  }
  Genrow(): FormGroup {
    return new FormGroup({
     id:new FormControl('',Validators.required),
    });
  }

  ProceedSave(){
    console.log(this.start+" "+this.end);
  }
  onclick(){
    alert("your data is saved");
    this.book.title=this.title;
    this.book.start=this.start;
    this.book.end=this.end;
    this.book.eid= JSON.parse(sessionStorage.getItem('eid') as string);
    this.book.roomId=Number(this.id);
    this.serv.reserve(this.book).subscribe(
      (res)=>{console.log(res);},
      (err)=>{console.log(err);}
    );
    this.router.navigate(['mlbooking'], {relativeTo: this.route.parent})
  }
}