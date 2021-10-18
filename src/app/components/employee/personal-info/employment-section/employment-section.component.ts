import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmploymentSection } from 'src/app/models/employment-section.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employment-section',
  templateUrl: './employment-section.component.html',
  styleUrls: ['./employment-section.component.css']
})
export class EmploymentSectionComponent implements OnInit {
  isReadOnly:string = 'readonly';
  @Input() personalInfo:any;

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

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(typeof(this.personalInfo)!=="undefined"){
      this.workAuthorization.setValue(this.personalInfo.visaStatus.visaType);
      this.workAuthStartDate.setValue(this.personalInfo.employee.visaStartDate);
      this.workAuthEndDate.setValue(this.personalInfo.employee.visaEndDate);
      this.employmentStartDate.setValue("2020-01-01");
      this.employmentEndDate.setValue("2025-01-01");
      this.title.setValue("sde");
    }
  }

  onEdit(){
    this.isReadOnly = '';
  }

  //save to database
  onSave(){
    console.log('save');
    this.isReadOnly = 'readonly';

    const objData = new EmploymentSection(
      this.personalInfo.employee.id,
      this.form.get('workAuthorization')?.value,
      this.form.get('workAuthStartDate')?.value,
      this.form.get('workAuthEndDate')?.value,
      this.form.get('employmentStartDate')?.value,
      this.form.get('employmentEndDate')?.value,
      this.form.get('title')?.value
    );

    console.log("before post: ",objData);

    this.http.post("http://localhost:8080/employee/edit-employee",objData,{withCredentials:true})
      .subscribe(
        response => {
          console.log('save employment section success');
          this.personalInfo.visaStatus.visaType = this.form.get('workAuthorization')?.value,
          this.personalInfo.employee.visaStartDate = this.form.get('visaStartDate')?.value,
          this.personalInfo.employee.visaEndDate = this.form.get('visaEndDate')?.value
        },
        error => console.log('failed to save name section')
      );
  }

  //cancel change
  onCancel(){
    console.log('cancel');
    if(confirm('Are you sure to discard all your changes')){
      this.workAuthorization.setValue(this.personalInfo.visaStatus.visaType);
      this.workAuthStartDate.setValue(this.personalInfo.employee.visaStartDate);
      this.workAuthEndDate.setValue(this.personalInfo.employee.visaEndDate);

      this.employmentStartDate.setValue("2020-01-01");
      this.employmentEndDate.setValue("2025-01-01");
      this.title.setValue("sde");

      this.isReadOnly = 'readonly';
    }

  }

}
