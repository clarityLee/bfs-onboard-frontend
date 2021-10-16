import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-personal-docs',
  templateUrl: './personal-docs.component.html',
  styleUrls: ['./personal-docs.component.css'],
})
export class PersonalDocsComponent implements OnInit {
  @Input() myForm: FormGroup = new FormGroup({});
  check: boolean = true;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.myForm.addControl('OPT', new FormControl());
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }

  previewInNewWindow() {
    let url = 'http://localhost:8080/download/' + this.myForm.get('OPT')?.value;
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
            this.myForm.controls['OPT'].setValue(results.path);

            //TODO: enable preview button, and set the preview url:
            this.check = false;

            // 'http://localhost:8080/download/bfs-onboard-files/' + results.path
          },
          (err) => {
            //TODO: disable the preview button
          }
        );
    }
  }
}
