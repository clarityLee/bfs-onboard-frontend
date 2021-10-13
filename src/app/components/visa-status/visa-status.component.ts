import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-visa-status',
  templateUrl: './visa-status.component.html',
  styleUrls: ['./visa-status.component.css']
})
export class VisaStatusComponent implements OnInit {
  //OPT status: OPT Receipt, OPT EAD, I-983, I-20, OPT STEM Receipt, OPT STEM EAD
  workAuth:string = 'OPT Receipt';
  optStatus:string[] = ['OPT Receipt', 'OPT EAD', 'I-983', 'I-20', 'OPT STEM Receipt', 'OPT STEM EAD'];
  AuthStartDate:string = '2/21/2021';
  AuthEndDate:string = '5/20/2021';
  AuthDateLeft:number=99;

  constructor() { }

  ngOnInit(): void {
  }

}
