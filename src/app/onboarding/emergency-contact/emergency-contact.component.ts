import { FormattedError } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css'],
})
export class EmergencyContactComponent implements OnInit {
  @Input() myForm: FormGroup = new FormGroup({});
  @Input() form = this.formBuilder.group({
    contacts: this.formBuilder.array([this.createContact()]),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  createContact(): FormGroup {
    return new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      middleName: new FormControl(''),
      Phone: new FormControl(''),
      address: this.formBuilder.group({
        addressLine1: new FormControl(''),
        addressLine2: new FormControl(''),
        city: new FormControl(''),
        stateName: new FormControl(''),
        zipcode: new FormControl(''),
        stateAbbr: new FormControl(''),
      }),
      email: new FormControl(''),
      relationship: new FormControl(''),
    });
  }

  addContact() {
    const contacts = this.form.controls.contacts as FormArray;
    contacts.push(
      this.formBuilder.group({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        middleName: new FormControl(''),
        Phone: new FormControl(''),
        address: this.formBuilder.group({
          addressLine1: new FormControl(''),
          addressLine2: new FormControl(''),
          city: new FormControl(''),
          stateName: new FormControl(''),
          zipcode: new FormControl(''),
          stateAbbr: new FormControl(''),
        }),
        email: new FormControl(''),
        relationship: new FormControl(''),
      })
    );
  }

  save() {
    this.myForm.addControl('contacts', new FormControl());
    this.myForm
      .get('contacts')
      ?.setValue(JSON.stringify(this.form.get('contacts')?.value));
    //testing purposes
    console.log(this.myForm.get('contacts')?.value);
  }
}
