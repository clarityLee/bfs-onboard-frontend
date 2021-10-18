import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {
  isReadOnly:string = 'readonly';
  @Input() personalInfo:any;
  
  personalEmail = new FormControl(null,[Validators.required]);
  workEmail = new FormControl(null, [Validators.required]);
  cellphone = new FormControl(null, [Validators.required]);
  workPhone = new FormControl(null, [Validators.required]);

  form: FormGroup = new FormGroup({
    personalEmail:this.personalEmail,
    workEmail:this.workEmail,
    cellphone:this.cellphone,
    workPhone:this.workPhone
  });



  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(typeof(this.personalInfo)!=="undefined"){
      console.log(this.personalInfo);
      this.personalEmail.setValue(this.personalInfo.person.email);
      this.workEmail.setValue(this.personalInfo.user.email);
      this.cellphone.setValue(this.personalInfo.person.cellPhone);
      this.workPhone.setValue(this.personalInfo.person.alternatePhone);
    }
    
  }

  onEdit(){
    this.isReadOnly = '';
  }

  //save to database
  onSave(){
    console.log('save');
    console.log(this.form.get('workEmail')?.value);
    this.isReadOnly = 'readonly';
  }

  //cancel change
  onCancel(){
    console.log('cancel');
    if(confirm('Are you sure to discard all your changes')){
      this.personalEmail.setValue('a@a.com');
      this.workEmail.setValue('b@b.com');
      this.cellphone.setValue('3123433434');
      this.workPhone.setValue('2343534564');

      this.isReadOnly = 'readonly';
    }

  }
}
