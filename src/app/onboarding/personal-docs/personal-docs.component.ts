import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-personal-docs',
  templateUrl: './personal-docs.component.html',
  styleUrls: ['./personal-docs.component.css'],
})
export class PersonalDocsComponent implements OnInit {
  @Input() myForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.addControl('OPT', new FormControl());
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }
}
