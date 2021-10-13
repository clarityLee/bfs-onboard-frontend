import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pac',
  templateUrl: './pac.component.html',
  styleUrls: ['./pac.component.css'],
})
export class PacComponent implements OnInit {
  @Input() myForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.addControl('cphone', new FormControl());
    this.myForm.addControl('wphone', new FormControl());
    this.myForm.addControl('address', new FormControl());
    this.myForm.addControl('city', new FormControl());
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }
}
