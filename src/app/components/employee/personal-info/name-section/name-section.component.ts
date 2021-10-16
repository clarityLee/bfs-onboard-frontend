import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-section',
  templateUrl: './name-section.component.html',
  styleUrls: ['./name-section.component.css']
})
export class NameSectionComponent implements OnInit {
  isReadOnly:string = 'readonly';

  firstname = new FormControl(null,[Validators.required]);
  lastname = new FormControl(null, [Validators.required]);
  preferredname = new FormControl(null, [Validators.required]);
  avatar = new FormControl(null,[Validators.required]);
  birth = new FormControl(null, [Validators.required]);
  age = new FormControl(null, [Validators.required]);
  gender = new FormControl({value:'',disabled:'true'},[Validators.required]);
  ssn = new FormControl(null, [Validators.required]);

  form: FormGroup = new FormGroup({
    firstname:this.firstname,
    lastname:this.lastname,
    preferredname:this.preferredname,
    avatar:this.avatar,
    birth:this.birth,
    age:this.age,
    gender:this.gender,
    ssn:this.ssn
  });

  constructor() { 
  }

  ngOnInit(): void {
    this.firstname.setValue("myfirstname");
    this.lastname.setValue('mylastname');
    this.preferredname.setValue('myprefername');
    this.avatar.setValue('myavatar');
    this.birth.setValue('09/10/1212');
    this.age.setValue(10);
    this.gender.setValue('female');
    this.ssn.setValue('123456');
  }

  onEdit(){
    this.isReadOnly = '';
    this.gender.enable();
  }

  //save to database
  onSave(){
    console.log('save');

    const formData = new FormData();
    formData.append('firstname',this.form.get('firstname')?.value);
    formData.append('lastname', this.form.get('lastname')?.value);
    formData.append('preferredname',this.form.get('preferredname')?.value);
    formData.append('avatar', this.form.get('avatar')?.value);
    formData.append('birth',this.form.get('birth')?.value);
    formData.append('age', this.form.get('age')?.value);
    formData.append('gender',this.form.get('gender')?.value);
    formData.append('ssn', this.form.get('ssn')?.value);

    console.log(this.form.get('firstname')?.value);
    console.log(this.form.get('gender')?.value);
    console.log(this.form.get('age')?.value);

    this.isReadOnly = 'readonly';
    this.gender.disable();
  }

  //cancel change
  onCancel(){
    console.log('cancel');
    if(confirm('Are you sure to discard all your changes')){
      this.firstname.setValue("myfirstname");
      this.lastname.setValue('mylastname');
      this.preferredname.setValue('myprefername');
      this.avatar.setValue('myavatar');
      this.birth.setValue('09/10/1212');
      this.age.setValue(10);
      this.gender.setValue('female');
      this.ssn.setValue('123456');

      this.isReadOnly = 'readonly';
      this.gender.disable();
    }
  }

}
