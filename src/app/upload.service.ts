import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpService: HttpClient) { }

  fileupload(frmData) {
    return this.httpService.post('http://127.0.0.1/api_liteStore/post.php/fileupload/action', frmData);
  }

}
