import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hr-home',
  templateUrl: './hr-home.component.html',
  styleUrls: ['./hr-home.component.css']
})
export class HrHomeComponent implements OnInit {
  userDate:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickName(){
    this.router.navigate(['/hr/visaStatusManagement']);
  }

  // send an email
  onNotify(){
    console.log("on notify");
  }

  onPreview(){
    console.log("on preview");
  }

  onDownload(){
    console.log("on Download");
  }

}
