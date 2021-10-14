import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  objectKeys = Object.keys;
  searchFirstname:string='';
  employeeProfiles = [{'eid':1,'firstname':'John','lastname':'lastJohn','SSN':'123','StartingDate':'9/1/2022','VisaStatus':'OPT'},
                  {'eid':2,'firstname':'John','lastname':'lastJohn','SSN':'123','StartingDate':'9/1/2022','VisaStatus':'OPT'},
                  {'eid':3,'firstname':'John','lastname':'lastJohn','SSN':'123','StartingDate':'9/1/2022','VisaStatus':'OPT'},
                  {'eid':4,'firstname':'John','lastname':'lastJohn','SSN':'123','StartingDate':'9/1/2022','VisaStatus':'OPT'},
                  {'eid':5,'firstname':'John','lastname':'lastJohn','SSN':'123','StartingDate':'9/1/2022','VisaStatus':'OPT'},
                  {'eid':6,'firstname':'mary','lastname':'lastMary','SSN':'345','StartingDate':'9/5/2022','VisaStatus':'OPT STEM'},
                  {'eid':7,'firstname':'mary','lastname':'lastMary','SSN':'345','StartingDate':'9/5/2022','VisaStatus':'OPT STEM'},
                  {'eid':8,'firstname':'mary','lastname':'lastMary','SSN':'345','StartingDate':'9/5/2022','VisaStatus':'OPT STEM'}];

  matchedProfiles:any;

  constructor() {
    this.matchedProfiles = this.employeeProfiles;
  }

  ngOnInit(): void {
  }

  onSearchFirstname(){
    console.log('on search: ', this.searchFirstname);
    this.matchedProfiles = this.employeeProfiles.filter(item=>
      item.firstname.indexOf(this.searchFirstname) !==-1 );
  }

}
