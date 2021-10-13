import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css'],
})
export class EmergencyContactComponent implements OnInit {
  @Input() myForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
