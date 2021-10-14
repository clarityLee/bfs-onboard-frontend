import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {
  personalEmail:string = 'a@a.com';
  workEmail:string = 'b@b.com';
  cellphone:string = '3123433434';
  workPhone:string = '2343534564';
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
      this.isReadOnly = 'readonly';
      this.personalEmail = 'a@a.com';
      this.workEmail = 'b@b.com';
      this.cellphone = '3123433434';
      this.workPhone = '2343534564';
    }

  }
}
