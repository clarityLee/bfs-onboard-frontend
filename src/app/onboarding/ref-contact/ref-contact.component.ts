import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ref-contact',
  templateUrl: './ref-contact.component.html',
  styleUrls: ['./ref-contact.component.css'],
})
export class RefContactComponent implements OnInit {
  @Input() myForm: FormGroup = new FormGroup({
    contacts: this.formBuilder.array([this.createContact()]),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.addControl('refFname', new FormControl());
    this.myForm.addControl('refLname', new FormControl());
    this.myForm.addControl('refMname', new FormControl());
    this.myForm.addControl('refPhone', new FormControl());
    this.myForm.addControl('refAddress', new FormControl());
    this.myForm.addControl('refAddress2', new FormControl());
    this.myForm.addControl('refCity', new FormControl());
    this.myForm.addControl('refState', new FormControl());
    this.myForm.addControl('refZip', new FormControl());
    this.myForm.addControl('refEmail', new FormControl());
    this.myForm.addControl('refRelationship', new FormControl());
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
    const contacts = this.myForm.get('contacts') as FormArray;
    contacts.push(this.createContact());
  }
  onSubmit(): void {
    console.log(this.myForm.value);
  }
}
