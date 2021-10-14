import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ref-contact',
  templateUrl: './ref-contact.component.html',
  styleUrls: ['./ref-contact.component.css'],
})
export class RefContactComponent implements OnInit {
  @Input() myForm: FormGroup = new FormGroup({});

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

  onSubmit(): void {
    console.log(this.myForm.value);
  }
}
