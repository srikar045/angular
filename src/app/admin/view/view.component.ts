import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from 'src/app/service/emp.service';
import { ModelService } from 'src/app/service/model.service';
import { MatAccordion } from '@angular/material/expansion';
import Swal from 'sweetalert2/dist/sweetalert2.js';
// 'sweetalert2'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  userdata: any = [];
  userdatas: any;
  constructor(private ser: EmpService,
    private router: Router,
    private serv: ModelService) { }

  // user: User = new User();

  ngOnInit(): void {
    this.data();
  }

  data() {

    this.ser.list().subscribe(
      (res) => { this.userdata = res; },
      (err) => { console.log(err); }
    );
  }

  add() {
    this.router.navigate(['admin/User'])
  }
  eid: any;
  id: number = 0;
  search() {
    this.id = this.eid;
    this.ser.get(this.id).subscribe(
      (res) => { this.userdatas = res; },
      (err) => { console.log(err); }
    );
  }

  

  // delete(id: number) {
  //   this.ser.delete(id).subscribe((id) => {
  //     id = id
  //   },
  //     (error => { console.log(error); }));
  //   window.location.reload();
  // }

  edit(data: any) {
    // this.serv.id(data);
    this.router.navigate(['/admin/User',data])
  }


// Custom Buttons
handleWarningAlert(data:any) {

  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this data!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it',
  }).then((result) => {

    if (result.isConfirmed) {
      
        this.ser.delete(data).subscribe((id) => {
          id = id;
          alert("Record deleted");
          window.location.reload();
        },
          (error => { console.log(error);
          alert(error.error) }));
       
    

    } else if (result.isDismissed) {

      console.log('Clicked No, File is safe!');

    }
  })

}

}