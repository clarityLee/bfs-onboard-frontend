import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NameSection } from 'src/app/models/name-section.model';

@Component({
  selector: 'app-name-section',
  templateUrl: './name-section.component.html',
  styleUrls: ['./name-section.component.css']
})
export class NameSectionComponent implements OnInit {
  isReadOnly:string = 'readonly';
  @Input() personalInfo:any;

  firstname = new FormControl(null,[Validators.required]);
  lastname = new FormControl(null, [Validators.required]);
  preferredname = new FormControl(null, [Validators.required]);
  birth = new FormControl(null, [Validators.required]);
  gender = new FormControl({value:'',disabled:'true'},[Validators.required]);
  ssn = new FormControl(null, [Validators.required]);

  form: FormGroup = new FormGroup({
    firstname:this.firstname,
    lastname:this.lastname,
    preferredname:this.preferredname,
    birth:this.birth,
    gender:this.gender,
    ssn:this.ssn
  });

  constructor(private http:HttpClient) { 
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(typeof(this.personalInfo)!=="undefined"){
      console.log(this.personalInfo);
      this.firstname.setValue(this.personalInfo.person.firstName);
      this.lastname.setValue(this.personalInfo.person.lastName);
      this.preferredname.setValue(this.personalInfo.person.preferredName);
      this.birth.setValue(this.personalInfo.person.dateOfBirth);
      this.gender.setValue(this.personalInfo.person.gender);
      this.ssn.setValue(this.personalInfo.person.ssn);
    }
    
  }

  onEdit(){
    this.isReadOnly = '';
    this.gender.enable();
  }

  //save to database
  onSave(){
    console.log('save');

    const objData = new NameSection(
      this.personalInfo.person.id,
      this.form.get('firstname')?.value,
      this.form.get('lastname')?.value,
      this.form.get('preferredname')?.value,
      this.form.get('birth')?.value,
      this.form.get('gender')?.value,
      this.form.get('ssn')?.value
    )

    console.log(objData);

    this.http.post("http://localhost:8080/employee/edit-person",objData,{withCredentials:true})
      .subscribe(
        response => {
          console.log('save name section success');
          this.personalInfo.person.firstName = this.form.get('firstname')?.value,
          this.personalInfo.person.lastName = this.form.get('lastname')?.value,
          this.personalInfo.person.preferredName = this.form.get('preferredname')?.value,
          this.personalInfo.person.dateOfBirth = this.form.get('birth')?.value,
          this.personalInfo.person.gender = this.form.get('gender')?.value,
          this.personalInfo.person.ssn = this.form.get('ssn')?.value
        },
        error => console.log('failed to save name section')
      );

    this.isReadOnly = 'readonly';
    this.gender.disable();
  }

  //cancel change
  onCancel(){
    console.log('cancel');
    if(confirm('Are you sure to discard all your changes')){
      this.firstname.setValue(this.personalInfo.person.firstName);
      this.lastname.setValue(this.personalInfo.person.lastName);
      this.preferredname.setValue(this.personalInfo.person.preferredName);
      this.birth.setValue(this.personalInfo.person.dateOfBirth);
      this.gender.setValue(this.personalInfo.person.gender);
      this.ssn.setValue(this.personalInfo.person.ssn);


      this.isReadOnly = 'readonly';
      this.gender.disable();
    }
  }

}
