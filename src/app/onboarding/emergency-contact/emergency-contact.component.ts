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

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      contacts: this.formBuilder.array([this.createContact()]),
    });
  }
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
    const contacts = this.form.controls.contacts as FormArray;
    contacts.push(
      this.formBuilder.group({
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
      })
    );

    console.log(JSON.stringify(this.myForm.get('contacts')?.value));
  }
  get formData() {
    return <FormArray>this.myForm.get('contacts');
  }

  save() {
    this.myForm.addControl('contacts', new FormControl());
    this.myForm
      .get('contacts')
      ?.setValue(JSON.stringify(this.form.get('contacts')?.value));
    console.log(this.myForm.get('contacts')?.value);
  }
  onSubmit(): void {
    console.log(this.myForm.get('contacts')?.value);
  }
}
