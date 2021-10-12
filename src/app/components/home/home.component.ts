import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // username:string = '';
  username:any = '';

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('username'));
    if(localStorage.getItem('username')!=null){
      this.username = localStorage.getItem('username');
      console.log('from localstorage '+this.username);
    }
      


    this.route.queryParams.subscribe((data)=>{
      console.log(data.username);
      this.username = data.username;
    })
  }

}
