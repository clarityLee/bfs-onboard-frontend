import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-pac',
  templateUrl: './pac.component.html',
  styleUrls: ['./pac.component.css'],
})
export class PacComponent implements OnInit {
  @Input() myForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.addControl('cphone', new FormControl('', Validators.required));
    this.myForm.addControl('wphone', new FormControl());
    this.myForm.addControl('address', new FormControl(Validators.required));
    this.myForm.addControl('address2', new FormControl());
    this.myForm.addControl('city', new FormControl());
    this.myForm.addControl('state', new FormControl());
    this.myForm.addControl('zip', new FormControl());
    this.myForm.addControl('carMake', new FormControl());
    this.myForm.addControl('carColor', new FormControl());
    this.myForm.addControl('carModel', new FormControl());
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }
}
