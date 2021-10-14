import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment-section',
  templateUrl: './employment-section.component.html',
  styleUrls: ['./employment-section.component.css']
})
export class EmploymentSectionComponent implements OnInit {
  workAuthorization:string="f1";
  workAuthStartDate:string="1/1/2020";
  workAuthEndDate:string="1/1/2020";
  employmentStartDate:string="1/1/2020";
  employmentEndDate:string="1/1/2020";
  title:string="sde";
  isReadOnly:string = 'readonly';


  constructor() { }

  ngOnInit(): void {
  }

  onEdit(){
    this.isReadOnly = '';
  }

  //save to database
  onSave(){
    console.log('save');
    this.isReadOnly = 'readonly';
  }

  //cancel change
  onCancel(){
    console.log('cancel');
    if(confirm('Are you sure to discard all your changes')){
      this.workAuthorization="f1";
      this.workAuthStartDate="1/1/2020";
      this.workAuthEndDate="1/1/2020";
      this.employmentStartDate="1/1/2020";
      this.employmentEndDate="1/1/2020";
      this.title="sde";
    }

  }

}
