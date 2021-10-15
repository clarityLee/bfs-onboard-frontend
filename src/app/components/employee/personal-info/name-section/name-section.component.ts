import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-section',
  templateUrl: './name-section.component.html',
  styleUrls: ['./name-section.component.css']
})
export class NameSectionComponent implements OnInit {
  firstname:string='';
  lastname:string='';
  preferredname:string='';
  avatar:string='';
  birth:string='';
  age:number=0;
  gender:string='';
  ssn:string='';
  isReadOnly:string = 'readonly';
  isdisabled:boolean = true;

  constructor() { 
    this.firstname="myfirstname";
    this.lastname='mylastname';
    this.preferredname='myprefername';
    this.avatar='myavatar';
    this.birth='09/10/1212';
    this.age=10;
    this.gender='female';
    this.ssn='123456';
  }

  ngOnInit(): void {

  }

  onEdit(){
    this.isReadOnly = '';
    this.isdisabled = false;
  }

  //save to database
  onSave(){
    console.log('save');
    console.log('in save func: ' + this.firstname);
    this.isReadOnly = 'readonly';
    this.isdisabled = true;
  }

  //cancel change
  onCancel(){
    console.log('cancel');
    if(confirm('Are you sure to discard all your changes')){
      this.firstname="myfirstname";
      this.lastname='mylastname';
      this.preferredname='myprefername';
      this.avatar='myavatar';
      this.birth='09/10/1212';
      this.age=10;
      this.gender='female';
      this.ssn='123456';
      this.isReadOnly = 'readonly';
      this.isdisabled = true;
    }
  }

}
