import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css'],
})
export class EmergencyContactComponent implements OnInit {
  @Input() myForm: FormGroup = new FormGroup({
    contacts: this.formBuilder.array([this.createContact()]),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  createContact(): FormGroup {
    return new FormGroup({
      cFname: new FormControl(''),
      cLname: new FormControl(''),
      cMname: new FormControl(''),
      cPhone: new FormControl(''),
      cAddress: new FormControl(''),
      cAddress2: new FormControl(''),
      cCity: new FormControl(''),
      cState: new FormControl(''),
      cZip: new FormControl(''),
      cEmail: new FormControl(''),
      cRelationship: new FormControl(''),
    });
  }

  addContact() {
    const contacts = this.myForm.get('contacts') as FormArray;
    contacts.push(this.createContact());
  }
  get formData() {
    return <FormArray>this.myForm.get('contacts');
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }
}
