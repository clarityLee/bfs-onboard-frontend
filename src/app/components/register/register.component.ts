import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OnboardService } from 'src/app/_services/onboard.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // @Input() myForm: FormGroup = new FormGroup({});
  myForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    token: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  token: string = '';
  email: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private myService: OnboardService
  ) {
    this.myService.set1(this.myForm.get('username')?.value);
    this.myService.set2(this.myForm.get('email')?.value);
  }

  ngOnInit(): void {
    // this.myForm.addControl('username', new FormControl());
    // this.myForm.addControl('token', new FormControl());
    // this.myForm.addControl('email', new FormControl());
    // this.myForm.addControl('password', new FormControl());

    this.myForm.controls['email'].disable();
    this.myForm.controls['token'].disable();

    this.route.queryParams.subscribe((params) => {
      this.myForm.patchValue({ email: params.email, token: params.token });
    });
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('username', this.myForm.get('username')?.value);
    formData.append('email', this.myForm.get('email')?.value);
    formData.append('token', this.myForm.get('token')?.value);
    formData.append('password', this.myForm.get('password')?.value);
    this.myService.set1(this.myForm.get('username')?.value);
    this.myService.set2(this.myForm.get('email')?.value);
    this.http.post('http://localhost:8080/login/register', formData).subscribe(
      (response) => this.router.navigate(['on-boarding']),
      (response) => {
        console.log(response.error);
      }
    );
  }
}
