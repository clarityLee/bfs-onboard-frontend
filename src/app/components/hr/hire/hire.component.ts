import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef,MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {
  email:string='';

  //{employeeId,personId,firstname,lastname,visaType,visaStartDate,visaEndDate,applicationWorkFlowId,status}
  onboardingAppData:any;
  documents = [
                {'title':'doc1','link':'link1'},
                {'title':'doc2','link':'link2'},
                {'title':'doc3','link':'link3'}
              ];

  personalInfo={'firstname':'John','lastname':'lastJohn','visaType':'F1','visaStartDate':'9/1/2022','visaEndDate':'9/1/2022','appStatus':'OPEN'};
  comments:any;

  constructor(public dialog:MatDialog, private http:HttpClient) { }

  ngOnInit(): void {
    //GET onboardingApp list
    this.http.get('http://localhost:8080/hr/onboardingAppList',{withCredentials:true}).subscribe(
      success => this.onboardingAppData = success,
      error => console.log('failed to get onboarding list', error)
    );
  }

  onGenerate(){
    console.log("on generate ",this.email);
    if(confirm('Are you sure you want to generate a token')){
      const formData = new FormData();
      formData.append('email', this.email);
      this.http.post('http://localhost:8080/hr/sendRegisterToken', formData,{withCredentials:true} ).subscribe(
        (response) => this.dialog.open(ModalTokenSent,{
                        data:{info:"success"},
                        position: {top: '20px',left: '40%'}
                      }),
        (response) => this.dialog.open(ModalTokenSent,{
                        data:{info:"failed"},
                        position: {top: '20px',left: '40%'}
                      })
      )
    }
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

@Component({
  selector: 'modal-token-sent',
  templateUrl: 'modal-token-sent.html',
})
export class ModalTokenSent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef:MatDialogRef<ModalTokenSent>){
  }
}