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
  str = '';
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  createContact(): FormGroup {
    return new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      middleName: new FormControl(''),
      phone: new FormControl(''),
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
  trackByFn(index: any, item: any) {
    return index;
  }

  addContact() {
    const contacts = this.form.controls.contacts as FormArray;
    contacts.push(
      this.formBuilder.group({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        middleName: new FormControl(''),
        phone: new FormControl(''),
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
    const contacts = this.form.controls.contacts as FormArray;
    for (let i = 0; i < contacts.length; i++) {
      this.str +=
        '{firstName: ' +
        contacts.at(i).get('firstName')?.value +
        ',' +
        'lastName: ' +
        contacts.at(i).get('lastName')?.value +
        ',' +
        'middleName: ' +
        contacts.at(i).get('middleName')?.value +
        ',' +
        'phone: ' +
        contacts.at(i).get('phone')?.value +
        ',' +
        'address: { addressLine1:' +
        contacts.at(i).get('addressLine1')?.value +
        ',' +
        'addressLine2:' +
        contacts.at(i).get('addressLine2')?.value +
        ',' +
        'city:' +
        contacts.at(i).get('city')?.value +
        ',' +
        'zipcode:' +
        contacts.at(i).get('zipcode')?.value +
        ',' +
        'stateName:' +
        contacts.at(i).get('stateName')?.value +
        ',' +
        'stateAbbr:' +
        contacts.at(i).get('stateName')?.value +
        ',' +
        '}, email: ' +
        contacts.at(i).get('email') +
        ',' +
        'relationship:' +
        contacts.at(i).get('relationship')?.value +
        ',}';
    }
    this.myForm.addControl('contacts', new FormControl());
    this.myForm.get('contacts')?.setValue(this.str);

    //testing purposes
    console.log(this.myForm.get('contacts')?.value);
  }
}
