import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  @Input() myForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.myForm.addControl('fname', new FormControl('', Validators.required));
    this.myForm.addControl('lname', new FormControl('', Validators.required));
    this.myForm.addControl('mname', new FormControl());
    this.myForm.addControl('ssn', new FormControl('', Validators.required));
    this.myForm.addControl('gender', new FormControl('', Validators.required));
    this.myForm.addControl('dob', new FormControl('', Validators.required));
    this.myForm.addControl(
      'citizenship',
      new FormControl('', Validators.required)
    );
    this.myForm.addControl('citizenType', new FormControl());
    this.myForm.addControl('license', new FormControl('', Validators.required));
    this.myForm.addControl('licenseNum', new FormControl());
    this.myForm.addControl('licenseExp', new FormControl());
    this.myForm.addControl('licenseFile', new FormControl());
    this.myForm.addControl('authType', new FormControl());
    this.myForm.addControl('authExp', new FormControl());
    this.myForm.addControl('startDate', new FormControl());
    this.myForm.addControl('workAuth', new FormControl());
    this.myForm.addControl('authFile', new FormControl());
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }

  previewInNewWindow() {
    let url =
      'http://localhost:8080/download/' + this.myForm.get('authFile')?.value;
    console.log('url: ' + url);
    window.open(
      url,
      'Image',
      'width=largeImage.stylewidth,height=largeImage.style.height,resizable=1'
    );
  }

  //TODO 1: add a preview buttons in the html, default disabled
  // if the button is enabled, then open a preview window on click

  //TODO 2: upload work authorization docs
  onWorkAuthSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      this.http
        .post<any>('http://localhost:8080/upload/bfs-onboard-files', formData)
        .subscribe(
          (results) => {
            // store the results.path into the authFile
            this.myForm.controls['authFile'].setValue(results.path);

            //TODO: enable preview button, and set the preview url:

            // 'http://localhost:8080/download/bfs-onboard-files/' + results.path
          },
          (err) => {
            //TODO: disable the preview button
          }
        );
    }
  }

  onLicenseSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      this.http
        .post<any>('http://localhost:8080/upload/bfs-onboard-files', formData)
        .subscribe(
          (results) => {
            // store the results.path into the authFile
            this.myForm.controls['licenseFile'].setValue(results.path);

            //TODO: enable preview button, and set the preview url:

            // 'http://localhost:8080/download/bfs-onboard-files/' + results.path
          },
          (err) => {
            //TODO: disable the preview button
          }
        );
    }
  }

  previewInNewWindow2() {
    let url =
      'http://localhost:8080/download/' + this.myForm.get('licenseFile')?.value;
    console.log('url: ' + url);
    window.open(
      url,
      'Image',
      'width=largeImage.stylewidth,height=largeImage.style.height,resizable=1'
    );
  }
  // TODO 3: upload driving license (Similar to TODO: 2)
}
