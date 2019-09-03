import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UploadService } from '../upload.service';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent {

  @Input() imagedir: string;
  @Output() messageEvent = new EventEmitter<string[]>();

  constructor(private uploadservice: UploadService) { }

  myFiles: string[] = [];
  sMsg: string = '';
  uploadedfiles: string[] = []

  getFileDetails(e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
  }

  uploadFiles() {

    const frmData = new FormData();

    frmData.append("imagedir", this.imagedir);
    for (var i = 0; i < this.myFiles.length; i++) {
      frmData.append("fileUpload[]", this.myFiles[i]);
    }

    this.uploadservice.fileupload(frmData).subscribe((response) => {
      this.uploadedfiles = response['data']['files'];
      console.log(typeof this.uploadedfiles);
      this.messageEvent.emit(this.uploadedfiles);
      //console.log(this.uploadedfiles);
    }, error => {
      console.error("Error in file uploading!");
    });

  }


}
