import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.css']
})
export class MlComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) { }
  logout(){
    alert("Logged Out");
    sessionStorage.clear();
    this.router.navigate(['home']);
  }
 
  ngOnInit(): void {
  

  }

}
