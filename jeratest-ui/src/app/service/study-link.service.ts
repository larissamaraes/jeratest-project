import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudyLink } from '../model/study-link.model';

@Injectable()
export class StudyLinkService {

  webApiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<StudyLink[]>(this.webApiUrl);
  }

  create(StudyLink: StudyLink) {
    return this.http.post(this.webApiUrl, StudyLink);
  }

  update(studyLink: StudyLink){
    return this.http.put(this.webApiUrl + String(studyLink.id), studyLink)
  }

  delete(id: number){
    return this.http.delete(this.webApiUrl + String(id));
  }

}