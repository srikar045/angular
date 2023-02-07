import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from 'src/app/service/emp.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bview',
  templateUrl: './bview.component.html',
  styleUrls: ['./bview.component.css']
})
export class BviewComponent implements OnInit {
booking:any=[];
date:Date=new Date();
  constructor(private service:EmpService,private router:Router) { }

  ngOnInit(): void {
this.data();
  }
data(){
this.service.booking().subscribe(
  (res)=>{this.booking=res},
  (err=>console.log(err))
);
}

edit(id:any){
this.router.navigate(['/admin/bookedit',id])
}
 
// Custom Buttons
handleWarningAlert(bId:any) {
  
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this data!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it',
  }).then((result) => {

    if (result.isConfirmed) {
        this.service.bdelete(bId).subscribe((id) => {
          id = id
        },
          (error => { console.log(error); }));
        window.location.reload();
    } else if (result.isDismissed) {
      console.log('Clicked No, File is safe!');
    }
  })

}

}
