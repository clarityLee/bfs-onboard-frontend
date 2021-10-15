import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css'],
})
export class OnboardingComponent implements OnInit {
  res = 'false';
  citizen = 'false';
  greencard = 'false';
  license = 'false';
  string: string = 'aaa';
  @Input() myForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  userType: any = null;
  ngOnInit(): void {}
  onSubmit(): void {
    var formData = new FormData();
    if (this.myForm.get('citizenship')?.value === 'yes') {
      this.res = 'true';
    }
    if (this.myForm.get('citizenType')?.value === 'Green Card') {
      this.greencard = 'true';
    }
    if (this.myForm.get('citizenType')?.value === 'Citizen') {
      this.citizen = 'true';
    }
    if (this.myForm.get('license')?.value === 'yes') {
      this.license = 'true';
    }
    formData.append('userName', this.string);
    formData.append('email', this.string);
    formData.append('firstName', this.myForm.get('fname')?.value);
    formData.append('lastName', this.myForm.get('lname')?.value);
    formData.append('middleName', this.myForm.get('mname')?.value);
    formData.append('preferredName', '-');
    formData.append('avatar', '-');
    formData.append('currentAddress', this.myForm.get('address')?.value);
    formData.append('ceilPhone', this.myForm.get('cphone')?.value);
    formData.append('workPhone', this.myForm.get('wphone')?.value);
    formData.append(
      'car',
      this.myForm.get('carMake')?.value +
        this.myForm.get('carColor')?.value +
        this.myForm.get('carModel')?.value
    );
    formData.append('SSN', this.myForm.get('ssn')?.value);
    formData.append('dateOfBirth', this.myForm.get('dob')?.value);
    formData.append('Gender', this.myForm.get('gender')?.value);
    formData.append('resident', this.res);
    formData.append('citizen', this.citizen);
    formData.append('greenCard', this.greencard);
    formData.append('workAuthorization', this.myForm.get('workAuth')?.value);
    formData.append('workAuthUploadPath', this.myForm.get('authFile')?.value);
    formData.append('hasDriverLicense', this.license);
    formData.append('driveLicenseNumber', this.myForm.get('licenseNum')?.value);
    formData.append(
      'driveLicenseExpireDate',
      this.myForm.get('licenseExp')?.value
    );
    formData.append('driveLicensePath', this.myForm.get('licenseFile')?.value);
    var object = {};

    console.log(this.myForm.value);
    this.http
      .post<any>('http://localhost:8080/on-boarding', {
        "firstName": "Joe",
        "lastName": "Smith",
      })
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
