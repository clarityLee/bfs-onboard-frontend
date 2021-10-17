import { Component, OnInit,AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  objectKeys = Object.keys;
  searchFirstname:string='';
  employeeProfiles:User[] = [{'eid':1,'firstname':'John','lastname':'lastJohn','SSN':'123','startingDate':'9/1/2022','visaStatus':'OPT'},
                  {'eid':2,'firstname':'John','lastname':'lastJohn','SSN':'123','startingDate':'9/1/2022','visaStatus':'OPT'},
                  {'eid':3,'firstname':'John','lastname':'lastJohn','SSN':'123','startingDate':'9/1/2022','visaStatus':'OPT'},
                  {'eid':4,'firstname':'John','lastname':'lastJohn','SSN':'123','startingDate':'9/1/2022','visaStatus':'OPT'},
                  {'eid':5,'firstname':'John','lastname':'lastJohn','SSN':'123','startingDate':'9/1/2022','visaStatus':'OPT'},
                  {'eid':6,'firstname':'mary','lastname':'lastMary','SSN':'345','startingDate':'9/5/2022','visaStatus':'OPT STEM'},
                  {'eid':7,'firstname':'mary','lastname':'lastMary','SSN':'345','startingDate':'9/5/2022','visaStatus':'OPT STEM'},
                  {'eid':8,'firstname':'mary','lastname':'lastMary','SSN':'345','startingDate':'9/5/2022','visaStatus':'OPT STEM'}];

                  
  matchedProfiles:any;

  displayedColumns: string[] = ['eid', 'firstname', 'lastname', 'ssn','startingDate','visaStatus'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.matchedProfiles = this.employeeProfiles;
    this.dataSource = new MatTableDataSource<User>(this.matchedProfiles);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onSearchFirstname(){
    console.log('on search: ', this.searchFirstname);
    this.matchedProfiles = this.employeeProfiles.filter(item=>
      item.firstname.indexOf(this.searchFirstname) !==-1 );
    this.dataSource = new MatTableDataSource<User>(this.matchedProfiles);
    this.dataSource.paginator = this.paginator;
  }
}

export interface User {
  eid: number;
  firstname: string;
  lastname: string;
  SSN: string;
  startingDate: string;
  visaStatus: string;
}

