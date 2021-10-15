import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef,MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {
  email:string='';
  onboardingAppData = [
    {'firstname':'John','lastname':'lastJohn','visaType':'F1','visaStartDate':'9/1/2022','visaEndDate':'9/1/2022','appStatus':'OPEN'},
    {'firstname':'John','lastname':'lastJohn','visaType':'OPT','visaStartDate':'9/1/2022','visaEndDate':'9/1/2022','appStatus':'OPEN'},
    {'firstname':'John','lastname':'lastJohn','visaType':'STEM','visaStartDate':'9/1/2022','visaEndDate':'9/1/2022','appStatus':'Pending'},
    {'firstname':'John','lastname':'lastJohn','visaType':'OPT','visaStartDate':'9/1/2022','visaEndDate':'9/1/2022','appStatus':'Pending'},
    {'firstname':'John','lastname':'lastJohn','visaType':'F1','visaStartDate':'9/1/2022','visaEndDate':'9/1/2022','appStatus':'Rejected'},
    {'firstname':'John','lastname':'lastJohn','visaType':'OPT','visaStartDate':'9/1/2022','visaEndDate':'9/1/2022','appStatus':'Rejected'},
    {'firstname':'John','lastname':'lastJohn','visaType':'F1','visaStartDate':'9/1/2022','visaEndDate':'9/1/2022','appStatus':'Completed'}
  ];

  documents = [
                {'title':'doc1','link':'link1'},
                {'title':'doc2','link':'link2'},
                {'title':'doc3','link':'link3'}
              ];

  personalInfo={'firstname':'John','lastname':'lastJohn','visaType':'F1','visaStartDate':'9/1/2022','visaEndDate':'9/1/2022','appStatus':'OPEN'};
  comments:any;

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onGenerate(){
    console.log("on generate ",this.email);
  }

  onDetails(){
    console.log("on details ");
    const dialogRef = this.dialog.open(ModalEmployeeDetails,{
      width: '80%',
      height: '80%',
      data:{docs:this.documents,pInfo:this.personalInfo}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onAddComments(){
    console.log("add comments for docs ");
  }

  onView(){
    console.log('view doc');
  }
}

@Component({
  selector: 'modal-employee-details',
  templateUrl: 'modal-employee-details.html',
})
export class ModalEmployeeDetails {
  comments:string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef:MatDialogRef<ModalEmployeeDetails>){

  }

  onView(){
    console.log("in modal view function");
  }

  onClose(){
    console.log("close");
    this.dialogRef.close();
  }

  onApprove(){
    console.log("approve");
    this.onClose();
  }

  onReject(){
    console.log("reject");
    this.onClose();
  }

  onAddComments(){
    console.log("add comments in modal");
  }
}