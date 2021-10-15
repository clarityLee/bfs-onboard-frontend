import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-document-section',
  templateUrl: './document-section.component.html',
  styleUrls: ['./document-section.component.css']
})
export class DocumentSectionComponent implements OnInit {
  documents = [{'title':'demo3','path':'http://static.runoob.com/images/demo/demo3.jpg'},
                {'title':'demo2','path':'http://static.runoob.com/images/demo/demo2.jpg'}]
  trustedUrl:any='';

  constructor(private sanitizer:DomSanitizer) {
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl('http://static.runoob.com/images/demo/demo3.jpg');
    console.log(this.trustedUrl);
   }

  ngOnInit(): void {
  }

  download(i:number){
    console.log(this.documents[i].path);
  }

  transform(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  onShow(){
    console.log('show modal');
  }
}
