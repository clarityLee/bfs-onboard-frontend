import { Component, OnInit,AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  objectKeys = Object.keys;
  searchFirstname:string='';
  // employeeProfiles:User[] = [{'eid':1,'firstname':'John','lastname':'lastJohn','ssn':'123','startingDate':'9/1/2022','visaStatus':'OPT'},
  //                 {'eid':2,'firstname':'John','lastname':'lastJohn','ssn':'123','startingDate':'9/1/2022','visaStatus':'OPT'},
  //                 {'eid':3,'firstname':'John','lastname':'lastJohn','ssn':'123','startingDate':'9/1/2022','visaStatus':'OPT'},
  //                 {'eid':4,'firstname':'John','lastname':'lastJohn','ssn':'123','startingDate':'9/1/2022','visaStatus':'OPT'},
  //                 {'eid':5,'firstname':'John','lastname':'lastJohn','ssn':'123','startingDate':'9/1/2022','visaStatus':'OPT'},
  //                 {'eid':6,'firstname':'mary','lastname':'lastMary','ssn':'345','startingDate':'9/5/2022','visaStatus':'OPT STEM'},
  //                 {'eid':7,'firstname':'mary','lastname':'lastMary','ssn':'345','startingDate':'9/5/2022','visaStatus':'OPT STEM'},
  //                 {'eid':8,'firstname':'mary','lastname':'lastMary','ssn':'345','startingDate':'9/5/2022','visaStatus':'OPT STEM'}];
  employeeProfiles:any;

                  
  matchedProfiles:any;

  // displayedColumns: string[] = ['eid', 'firstname', 'lastname', 'ssn','startingDate','visaStatus'];
  displayedColumns: string[] = ['eid', 'firstname', 'lastname', 'startingDate','visaStatus', 'appStatus'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/hr/onboardingAppList',{withCredentials:true}).subscribe(
      success => {
        this.employeeProfiles = success;
        console.log('get employee profile list success ', this.employeeProfiles);
        this.matchedProfiles = this.employeeProfiles;
        this.dataSource = new MatTableDataSource<User>(this.matchedProfiles);
        this.dataSource.paginator = this.paginator;
      },
      error => console.log('failed to get onboarding list', error)
    );
    
  }

  // ngOnchange():void{
  //   if(this.employeeProfiles!=='undefined'){
  //     this.matchedProfiles = this.employeeProfiles;
  //     console.log('aaa'+ this.matchedProfiles);
  //     this.dataSource = new MatTableDataSource<User>(this.matchedProfiles);
  //   }
  // }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  onSearchFirstname(){
    console.log('on search: ', this.searchFirstname);
    this.matchedProfiles = this.employeeProfiles.filter((item:any)=>
      item.firstname.indexOf(this.searchFirstname) !==-1 );
    this.dataSource = new MatTableDataSource<User>(this.matchedProfiles);
    this.dataSource.paginator = this.paginator;
  }
}

export interface User {
  eid: number;
  firstname: string;
  lastname: string;
  ssn: string;
  startingDate: string;
  visaStatus: string;
}

