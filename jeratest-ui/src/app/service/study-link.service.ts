import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StudyLinkService {

  webApiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<any[]>(this.webApiUrl);
  }

  create(item: any) {
    return this.http.post(this.webApiUrl, item);
  }

}