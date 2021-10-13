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
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }
}
