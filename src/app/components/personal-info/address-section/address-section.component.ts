import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-section',
  templateUrl: './address-section.component.html',
  styleUrls: ['./address-section.component.css']
})
export class AddressSectionComponent implements OnInit {
  primaryAddressLine1:string='p add 1';
  primaryAddressLine2:string='p add 2';
  primaryCity:string='city1';
  primaryState:string='state1';
  primaryZip:string='00000';
  secondaryAddressLine1:string='s add 1';
  secondaryAddressLine2:string='s add 2';
  secondaryCity:string='city2';
  secondaryState:string='state2';
  secondaryZip:string='11111';
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
      this.primaryAddressLine1='p add 1';
      this.primaryAddressLine2='p add 2';
      this.primaryCity='city1';
      this.primaryState='state1';
      this.primaryZip='00000';
      this.secondaryAddressLine1='s add 1';
      this.secondaryAddressLine2='s add 2';
      this.secondaryCity='city2';
      this.secondaryState='state2';
      this.secondaryZip='11111';
    }
    
  }


}
