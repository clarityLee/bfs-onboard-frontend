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

  //personalInfo={firstname,lastname,visaType,visaStartDate,visaEndDate,appStatus};
  personalInfo:any;
  comments:any;

  constructor(public dialog:MatDialog, private http:HttpClient) { }

  ngOnInit(): void {
    this.getOnboradingAppList();
  }

  getOnboradingAppList(){
  //GET onboardingApp list
  this.http.get('http://localhost:8080/hr/onboardingAppList',{withCredentials:true}).subscribe(
    success => {
      this.onboardingAppData = success;
      console.log('get onboard list success')
    },
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

  onDetails(eid:number){
    console.log("on details ", eid);
    let url = 'http://localhost:8080/details/employee/' + eid;
    this.http.get(url,{withCredentials:true} ).subscribe(
        (response) => {
          this.personalInfo = response;
          const dialogRef = this.dialog.open(ModalEmployeeDetails,{
            width: '90%',
            height: '90%',
            data:{pInfo:this.personalInfo}
          });
      
          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.getOnboradingAppList();
          });
        },
        (response) => console.log("failed to get personal info in details page")
      );
    
  }
}

@Component({
  selector: 'modal-employee-details',
  templateUrl: 'modal-employee-details.html',
  styleUrls: ['./modal-employee-details.component.css']
})
export class ModalEmployeeDetails {
  comments:string[] = [];
  appComment:string ='';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef:MatDialogRef<ModalEmployeeDetails>,private http:HttpClient){

  }

  onView(path:string){
    console.log("in modal view function");
    let url = 'http://localhost:8080/download/bfs-work-authorization/' + path;
    console.log('url: ' + url);
    window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
  }

  onAddAppComment(wordflowId:number){
    console.log('in modal add app comments');
    const formData = new FormData();
    formData.append('applicationWorkFlowId',wordflowId.toString());
    formData.append('comment',this.appComment);

    this.http.post('http://localhost:8080/hr/comment/application',formData,{withCredentials:true}).subscribe(
      (success)=> console.log('add app comment success'),
      (error) => console.log('fail to add comment')
    );
  }

  onClose(){
    console.log("close");
    this.dialogRef.close();
  }

  onApprove(wordflowId:number){
    console.log("approve");
    const formData = new FormData();
    formData.append('applicationWorkFlowId',wordflowId.toString());

    this.http.post('http://localhost:8080/hr/hiring/approve',formData,{withCredentials:true}).subscribe(
      (success)=> console.log('approve success'),
      (error) => console.log('fail to approve')
    );
  }

  onReject(wordflowId:number){
    console.log("reject");
    const formData = new FormData();
    formData.append('applicationWorkFlowId',wordflowId.toString());
    formData.append('rejectReason',this.comments.toString());
    this.http.post('http://localhost:8080/hr/hiring/reject',formData,{withCredentials:true}).subscribe(
      (success)=> console.log('reject success'),
      (error) => console.log('fail to reject')
    );
  }

  onAddComments(index:number, docId:number){
    console.log("add comments in modal");
    console.log('index ',index ,' comments: ', this.comments[index], ' doc id',docId);

    const formData = new FormData();
    formData.append('personalDocumentId',docId.toString());
    formData.append('comment', this.comments[index]);

    this.http.post('http://localhost:8080/hr/comment/docs',formData,{withCredentials:true}).subscribe(
      (success)=> console.log('add comment success'),
      (error) => console.log('fail to add comment')
    );
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