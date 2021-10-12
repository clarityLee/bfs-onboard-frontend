import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';
  username:string = '';
  isUsername:boolean = true;
  user = {username:'aaa',password:'aaa'};
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log("click login");
    console.log("email: " + this.email);
    console.log("pass: " + this.password);
    if(this.username === this.user.username && this.password === this.user.password){
      localStorage.setItem('username',this.username);
      console.log("pass matched");
      let navigationExtras: NavigationExtras = {
        queryParams: {'username' : this.username}
      };
      this.router.navigate(['/home'],navigationExtras);
    }else{
      this.username = '';
      this.email = '';
      this.password = '';
      this.router.navigate(['/'])
    }

  }

  onUsername(){
    this.isUsername = true;
  }

  onEmail(){
    this.isUsername = false;
  }
}
