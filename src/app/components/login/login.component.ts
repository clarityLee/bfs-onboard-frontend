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
  
  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  onLogin = () =>{
    const formData = new FormData();
    formData.append('username',this.username);
    formData.append('password',this.password);
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
