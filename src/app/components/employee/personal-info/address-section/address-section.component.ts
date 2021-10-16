import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-section',
  templateUrl: './address-section.component.html',
  styleUrls: ['./address-section.component.css']
})
export class AddressSectionComponent implements OnInit {
  isReadOnly:string = 'readonly';

  primaryAddressLine1 = new FormControl(null,[Validators.required]);
  primaryAddressLine2 = new FormControl(null);
  primaryCity = new FormControl(null, [Validators.required]);
  primaryState = new FormControl(null,[Validators.required]);
  primaryZip = new FormControl(null, [Validators.required]);

  secondaryAddressLine1 = new FormControl(null, [Validators.required]);
  secondaryAddressLine2 = new FormControl(null,[Validators.required]);
  secondaryCity = new FormControl(null, [Validators.required]);
  secondaryState = new FormControl(null, [Validators.required]);
  secondaryZip = new FormControl(null,[Validators.required]);

  form: FormGroup = new FormGroup({
    primaryAddressLine1:this.primaryAddressLine1,
    primaryAddressLine2:this.primaryAddressLine2,
    primaryCity:this.primaryCity,
    primaryState:this.primaryState,
    primaryZip:this.primaryZip,
    secondaryAddressLine1:this.secondaryAddressLine1,
    secondaryAddressLine2:this.secondaryAddressLine2,
    secondaryCity:this.secondaryCity,
    secondaryState:this.secondaryState,
    secondaryZip:this.secondaryZip,
  });

  constructor() { }

  ngOnInit(): void {
    this.primaryAddressLine1.setValue('p add 1');
    this.primaryAddressLine2.setValue('p add 2');
    this.primaryCity.setValue('city1');
    this.primaryState.setValue('state1');
    this.primaryZip.setValue('00000');
    this.secondaryAddressLine1.setValue('s add 1');
    this.secondaryAddressLine2.setValue('s add 2');
    this.secondaryCity.setValue('city2');
    this.secondaryState.setValue('state2');
    this.secondaryZip.setValue('11111');
  }

  onEdit(){
    this.isReadOnly = '';
  }

  //save to database
  onSave(){
    console.log('save');
    this.isReadOnly = 'readonly';

    console.log("primaryAddressLine1 ",this.form.get("primaryAddressLine1")?.value);
  }

  //cancel change
  onCancel(){
    console.log('cancel');
    if(confirm('Are you sure to discard all your changes')){
      this.primaryAddressLine1.setValue('p add 1');
      this.primaryAddressLine2.setValue('p add 2');
      this.primaryCity.setValue('city1');
      this.primaryState.setValue('state1');
      this.primaryZip.setValue('00000');
      this.secondaryAddressLine1.setValue('s add 1');
      this.secondaryAddressLine2.setValue('s add 2');
      this.secondaryCity.setValue('city2');
      this.secondaryState.setValue('state2');
      this.secondaryZip.setValue('11111');

      this.isReadOnly = 'readonly';
    }
    
  }


}
