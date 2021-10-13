import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ref-contact',
  templateUrl: './ref-contact.component.html',
  styleUrls: ['./ref-contact.component.css'],
})
export class RefContactComponent implements OnInit {
  @Input() myForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
