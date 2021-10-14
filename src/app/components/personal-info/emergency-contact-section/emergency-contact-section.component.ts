import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency-contact-section',
  templateUrl: './emergency-contact-section.component.html',
  styleUrls: ['./emergency-contact-section.component.css']
})
export class EmergencyContactSectionComponent implements OnInit {
  emergencyContacts = [{'fullname':'emergency1', 'phone':'1234','address':'emergency add1'},
                      {'fullname':'emergency2', 'phone':'5678','address':'emergency add2'}];
  
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
    console.log(this.emergencyContacts);
    this.isReadOnly = 'readonly';
  }

  //cancel change
  onCancel(){
    console.log('cancel');
    if(confirm('Are you sure to discard all your changes')){
      this.emergencyContacts = [{'fullname':'emergency1', 'phone':'1234','address':'emergency add1'},
      {'fullname':'emergency2', 'phone':'5678','address':'emergency add2'}];
      this.isReadOnly = 'readonly';
    }

  }

}
