import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  @Input() myForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.addControl('fname', new FormControl());
    this.myForm.addControl('lname', new FormControl());
    this.myForm.addControl('mname', new FormControl());
    this.myForm.addControl('ssn', new FormControl());
    this.myForm.addControl('gender', new FormControl());
    this.myForm.addControl('dob', new FormControl());
    this.myForm.addControl('citizenship', new FormControl());
    this.myForm.addControl('citizenType', new FormControl());
    this.myForm.addControl('license', new FormControl());
    this.myForm.addControl('licenseNum', new FormControl());
    this.myForm.addControl('licenseExp', new FormControl());
    this.myForm.addControl('licenseFile', new FormControl());
    this.myForm.addControl('authType', new FormControl());
    this.myForm.addControl('authExp', new FormControl());
    this.myForm.addControl('startDate', new FormControl());
    this.myForm.addControl('workAuth', new FormControl());
    this.myForm.addControl('authFile', new FormControl());
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }
}
