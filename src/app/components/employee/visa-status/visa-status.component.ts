import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

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

  fileName = '';
  remotePath = '';

  fileToUpload!:File;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
  
    const file:File = event.target.files[0];
    if (file) {
        this.fileName = file.name;
        this.fileToUpload = file;
    }
  }

  onUpload(){
    const formData = new FormData();
    formData.append("file", this.fileToUpload);
    console.log('upload file test: ',this.fileName);

    // upload personal picture to bfs-avatar
  //   const upload$ = this.http.post<any>("http://localhost:8080/upload/bfs-avatar", formData);

    // upload other documents (pdf / docx)
    const upload$ = this.http.post<any>("http://localhost:8080/upload/bfs-onboard-files", formData);
    
    upload$.subscribe(
      results => {
        this.remotePath = results.path;
        console.log("file upload success ", this.remotePath);
      },
      error => {
        console.log("file upload failed");
      }
    );
  }

  prewviewInNewWindow() {
    let url = 'http://localhost:8080/download/' + this.remotePath;
    console.log('url: ' + url);
    window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
  }

}
