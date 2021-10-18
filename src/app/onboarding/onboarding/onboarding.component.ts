import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  userType: any = 'personal';
  ngOnInit(): void {}

  onSubmit(): void {
    //var formData = new FormData();
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
    // formData.append('userName', this.string);
    // formData.append('email', this.string);
    // formData.append('firstName', this.myForm.get('fname')?.value);
    // formData.append('lastName', this.myForm.get('lname')?.value);
    // formData.append('middleName', this.myForm.get('mname')?.value);
    // formData.append('preferredName', '-');
    // formData.append('avatar', '-');
    // formData.append('currentAddress', this.myForm.get('address')?.value);
    // formData.append('ceilPhone', this.myForm.get('cphone')?.value);
    // formData.append('workPhone', this.myForm.get('wphone')?.value);
    // formData.append(
    //   'car',
    //   this.myForm.get('carMake')?.value +
    //     this.myForm.get('carColor')?.value +
    //     this.myForm.get('carModel')?.value
    // );
    // formData.append('SSN', this.myForm.get('ssn')?.value);
    // formData.append('dateOfBirth', this.myForm.get('dob')?.value);
    // formData.append('Gender', this.myForm.get('gender')?.value);
    // formData.append('resident', this.res);
    // formData.append('citizen', this.citizen);
    // formData.append('greenCard', this.greencard);
    // formData.append('workAuthorization', this.myForm.get('workAuth')?.value);
    // formData.append('workAuthUploadPath', this.myForm.get('authFile')?.value);
    // formData.append('hasDriverLicense', this.license);
    // formData.append('driveLicenseNumber', this.myForm.get('licenseNum')?.value);
    // formData.append(
    //   'driveLicenseExpireDate',
    //   this.myForm.get('licenseExp')?.value
    // );
    // formData.append('driveLicensePath', this.myForm.get('licenseFile')?.value);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    //testing purposes
    console.log(this.myForm.value);

    this.http
      .post<any>(
        'http://localhost:8080/on-boarding',
        {
          username: this.string,
          email: this.string,
          firstName: this.myForm.get('fname')?.value,
          lastName: this.myForm.get('lname')?.value,
          middleName: this.myForm.get('mname')?.value,
          preferredName: '-',
          avatar: '-',
          currentAddress: {
            addressLine1: this.myForm.get('address')?.value,
            addressLine2: this.myForm.get('address2')?.value,
            city: this.myForm.get('city')?.value,
            zipcode: this.myForm.get('zip')?.value,
            stateName: this.myForm.get('state')?.value,
            stateAbbr: this.myForm.get('state')?.value,
          },
          cellPhone: this.myForm.get('cphone')?.value,
          workPhone: this.myForm.get('wphone')?.value,
          car:
            this.myForm.get('carMake')?.value +
            this.myForm.get('carColor')?.value +
            this.myForm.get('carModel')?.value,
          ssn: this.myForm.get('ssn')?.value,
          dateOfBirth: this.myForm.get('dob')?.value,
          resident: this.res,
          citizen: this.citizen,
          greenCard: this.greencard,
          visaStartDate: this.myForm.get('startDate')?.value,
          visaEndDate: this.myForm.get('authExp')?.value,
          workAuthorization: this.myForm.get('authType')?.value,
          workAuthUploadPath: this.myForm.get('authFile')?.value,
          hasDriveLicense: this.license,
          driveLicenseNumber: this.myForm.get('licenseNum')?.value,
          driveLicenseExpireDate: this.myForm.get('licenseExp')?.value,
          driveLicensePath: this.myForm.get('licenseFile')?.value,
          gender: this.myForm.get('gender')?.value,
          optReceipt: this.myForm.get('OPT')?.value,
          reference: {
            firstName: this.myForm.get('refFname')?.value,
            lastName: this.myForm.get('refLname')?.value,
            middleName: this.myForm.get('refMname')?.value,
            phone: this.myForm.get('refPhone')?.value,
            address: {
              addressLine1: this.myForm.get('refAddress')?.value,
              addressLine2: this.myForm.get('refAddress2')?.value,
              city: this.myForm.get('refCity')?.value,
              zipcode: this.myForm.get('refZip')?.value,
              stateName: this.myForm.get('refState')?.value,
              stateAbbr: this.myForm.get('refState')?.value,
            },
            email: this.myForm.get('refEmail')?.value,
            relationship: this.myForm.get('refRelationship')?.value,
          },

          emergencyList: [
            {
              firstName: 'bob',
              lastName: 'asdf',
              middleName: 'asdf',
              phone: '6549873214',
              address: {
                addressLine1: 'asdf',
                addressLine2: '',
                city: 'asdf',
                zipcode: '65478',
                stateName: 'asdf',
                stateAbbr: 'asdf',
              },
              email: 'asdf@asdf',
              relationship: 'asdf',
            },
          ],
        },
        httpOptions
      )
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  test() {
    //testing
    console.log(this.myForm.get('contacts')?.value);
  }
}
