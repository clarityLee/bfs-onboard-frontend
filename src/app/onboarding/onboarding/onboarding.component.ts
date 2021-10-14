import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css'],
})
export class OnboardingComponent implements OnInit {
  string: string = '';
  @Input() myForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}
  userType: any = null;
  ngOnInit(): void {}
  onSubmit(): void {
    //logs for testing
    console.log(this.myForm.value);
    this.string = this.myForm.controls['city'].value;
    console.log(this.string);
  }
}
