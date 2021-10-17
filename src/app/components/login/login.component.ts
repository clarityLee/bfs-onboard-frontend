import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isUsername:boolean = true;
  logSuccess:boolean = false;

  username = new FormControl(null,[Validators.required]);
  email = new FormControl(null, [Validators.required]);
  password = new FormControl(null, [Validators.required]);
  form: FormGroup = new FormGroup({username:this.username,email:this.email,password:this.password});


  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  onLogin = () =>{
    const formData = new FormData();
    formData.append('username',this.form.get('username')?.value);
    formData.append('password', this.form.get('password')?.value);

    this.http.post<any>("http://localhost:9999/login",formData,{withCredentials:true} )
      .subscribe(
        data =>{
          //localStorage.setItem('username',this.username);
          localStorage.setItem('username',this.form.get('username')?.value);
          if (data.permissions.includes('hrpage'))
            this.router.navigate(['/hr/home']);
          else
            this.router.navigate(['/employee/home'])
        },
        error =>{
          this.username.setValue(null);
          this.email.setValue(null);
          this.password.setValue(null);
          this.logSuccess = true;
        }
      )
  }

  onUsername(){
    this.isUsername = true;
  }

  onEmail(){
    this.isUsername = false;
  }

  getErrorMessage(errorType: string):string{
    switch(errorType){
      case 'username':
        return "username can't be null";
      case 'email':
        return "email can't be null";
      case 'password':
        return "password can't be null";
    }
    return '';
  }
}
