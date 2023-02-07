import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/service/booking.model';
import { EmpService } from 'src/app/service/emp.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Booking = new Booking();
  constructor(private router:Router,
    private route: ActivatedRoute,
    private ser: EmpService,
    private fb:FormBuilder
  ) { }
  roomId: number = 0;
aa:any=[];
  title = '';
  start: any;
  end: any;
  eids:any;
  eidsa:any=[];
  addnum(){
  this.eidsa.push(this.eids);
  this.book.eids.push(this.eids);

  this.eids=null;
  console.log(this.book.eids);
  }
  remove(data:any){
    // delete this.eidsa[data];
    // this.eidsa.splice(data);
    this.eidsa.forEach((value: any,index: any)=>{
      if(value==data) this.eidsa.splice(index,1);
  });

  this.book.eids.forEach((value: any,index: any)=>{
    if(value==data) this.book.eids.splice(index,1);
});
  console.log(this.eidsa);
  console.log(this.book.eids);


  }
  ngOnInit(): void {
    this.roomId = this.route.snapshot.params['rid'];
    this.book.roomId = Number(this.route.snapshot.params['rid']);
    console.log(this.book.roomId);
    this.Addnewrow();
  }

 items!: FormArray;
reactform = new FormGroup({
deladdress: new FormArray([])
});
ProceedSave() {
  this.aa=this.reactform.value;
console.log(this.reactform.value);
}

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
  deladdress:new FormControl('',Validators.required),
});
}



  onclick() {
    console.log(this.title, this.start, this.end);
    this.book.title = this.title;
    this.book.start = this.start;
    this.book.end = this.end;
    // this.book.eids.push(this.reactform.value);
    this.book.eids;
    this.book.eid = JSON.parse(sessionStorage.getItem('eid') as string);
    this.book.roomId = Number(this.roomId);
     this.ser.book(this.book).subscribe(
      (res)=>{console.log(res);
        alert("your data is saved");
        this.router.navigate(['/admin/roomview']);

      },
      (err=>{console.log(err);
        if(err==226){
          alert(err.error);
          console.log(err);
          console.log(err.error)

        }
        else if(err=='ok'){
          this.router.navigate(['/admin/roomview']);
        }else if(err=='Some thing is wrong'){
          // alert("Change Start or End TIME to continue");
        }
      })
     );
    // console.log(this.book);
      // this.router.navigate(['/admin/roomview']);
  }
}
