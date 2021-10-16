import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employment-section',
  templateUrl: './employment-section.component.html',
  styleUrls: ['./employment-section.component.css']
})
export class EmploymentSectionComponent implements OnInit {
  isReadOnly:string = 'readonly';

  workAuthorization = new FormControl(null,[Validators.required]);
  workAuthStartDate = new FormControl(null, [Validators.required]);
  workAuthEndDate = new FormControl(null, [Validators.required]);
  employmentStartDate = new FormControl(null,[Validators.required]);
  employmentEndDate = new FormControl(null, [Validators.required]);
  title = new FormControl(null, [Validators.required]);

  form: FormGroup = new FormGroup({
    workAuthorization:this.workAuthorization,
    workAuthStartDate:this.workAuthStartDate,
    workAuthEndDate:this.workAuthEndDate,
    employmentStartDate:this.employmentStartDate,
    employmentEndDate:this.employmentEndDate,
    title:this.title,
  });

  constructor() {
  }

  ngOnInit(): void {
    this.workAuthorization.setValue("f1");
      this.workAuthStartDate.setValue("1/1/2020");
      this.workAuthEndDate.setValue("1/1/2020");
      this.employmentStartDate.setValue("1/1/2020");
      this.employmentEndDate.setValue("1/1/2020");
      this.title.setValue("sde");
      this.isReadOnly = 'readonly';
  }

  onEdit(){
    this.isReadOnly = '';
  }

  //save to database
  onSave(){
    console.log('save');
    console.log("title ", this.form.get('title')?.value)
    this.isReadOnly = 'readonly';
  }

  //cancel change
  onCancel(){
    console.log('cancel');
    if(confirm('Are you sure to discard all your changes')){
      this.workAuthorization.setValue("f1");
      this.workAuthStartDate.setValue("1/1/2020");
      this.workAuthEndDate.setValue("1/1/2020");
      this.employmentStartDate.setValue("1/1/2020");
      this.employmentEndDate.setValue("1/1/2020");
      this.title.setValue("sde");
      this.isReadOnly = 'readonly';
    }

  }

}
