import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Input() myForm: FormGroup = new FormGroup({});
  token: any = '';
  email: any = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm.addControl('username', new FormControl());
    this.myForm.addControl('token', new FormControl());
    this.myForm.addControl('email', new FormControl());
    this.myForm.addControl('password', new FormControl());

    this.route.params.subscribe((params) => {
      console.log(this.route.url);
    });
    this.token = this.route.snapshot.queryParamMap.get('token');
    this.email = this.route.snapshot.queryParamMap.get('email');
  }

  onSubmit(): void {
    var formData = new FormData();
    formData.append('username', this.myForm.get('username')?.value);
    formData.append('email', 'clarity.lee@gmail.com');
    formData.append('token', 'ozvghzyy-lotw-uuv2-hcma-ljcl0tvgubrh');
    formData.append('password', this.myForm.get('password')?.value);

    this.http.post('http://localhost:8080/login/register', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );

    console.log(formData.get('token'));

    this.router.navigate(['on-boarding']);
  }
}
