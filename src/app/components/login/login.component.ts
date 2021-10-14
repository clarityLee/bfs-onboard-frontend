import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

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
  

  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  // onLogin(){
  //   console.log("click login");
  //   console.log("email: " + this.email);
  //   console.log("pass: " + this.password);

  //   if(this.username === this.user.username && this.password === this.user.password){
  //     localStorage.setItem('username',this.username);
  //     console.log("pass matched");

  //     this.router.navigate(['/employee/home']);
  //   }else{
  //     this.username = '';
  //     this.email = '';
  //     this.password = '';
  //     this.router.navigate(['/'])
  //   }
  // }

  onLogin = () =>{
    const formData = new FormData();
    formData.append('username',this.username);
    formData.append('password',this.password);
    //this.http.post("http://localhost:9999/login?username="+this.username + "&password="+this.password,{} )
    this.http.post("http://localhost:9999/login",formData )
      .subscribe(
        data =>{
          console.log("post response ",data);
          localStorage.setItem('username',this.username);
          console.log(JSON.parse(JSON.stringify(data)).permissions[0]);
          if(JSON.parse(JSON.stringify(data)).permissions[0].indexOf("employee") !== -1){
            this.router.navigate(['/employee/home']);
          }else{
            this.router.navigate(['/hr/home']);
          }
        },
        error =>{
          console.log("Error ", error);
          this.username = '';
          this.email = '';
          this.password = '';
          this.router.navigate(['/'])
        }
    )
  }
    
  

  onUsername(){
    this.isUsername = true;
  }

  onEmail(){
    this.isUsername = false;
  }
}
