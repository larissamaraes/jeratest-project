import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudyLinkService } from '../service/study-link.service';
import { StudyLink } from '../model/study-link.model';

@Component({
  selector: 'app-study-link-form',
  templateUrl: './study-link-form.component.html',
  styleUrls: ['./study-link-form.component.css']
})
export class StudyLinkFormComponent {

  studyLinkForm: FormGroup;

  studyLink: StudyLink;

  constructor(private snackBar: MatSnackBar,
    private studyLinkService: StudyLinkService,
    private formBuilder: FormBuilder) {
    this.studyLink = new StudyLink(null, null, null, null, null, null);

    this.studyLinkForm = this.formBuilder.group({
      title: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categories: string[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.categories.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }

  remove(category: string): void {
    const index = this.categories.indexOf(category);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  getStudyLinkFromForm(): StudyLink {
    this.studyLink.title = this.studyLinkForm.controls['title'].value;
    this.studyLink.url = this.studyLinkForm.controls['url'].value;
    this.studyLink.date = this.parseDateToString(new Date());
    this.studyLink.categories = this.categories;
    this.studyLink.checked = false;
    return this.studyLink;
  }

  cleanForm(){
    this.studyLinkForm = this.formBuilder.group({
      title: '',
      url: ''
    });
    this.categories = [];
  }


  onClick() {
    this.studyLinkService.create(this.getStudyLinkFromForm()).subscribe((result) => {
      this.snackBar.open('Artigo salvo com sucesso!', '', {
        duration: 3000,
      });
      this.cleanForm();
    });
  }

  parseDateToString(data) {

    if (data) {
      let date = new Date(data);
      let hours = String(date.getHours());
      hours = Number(hours) < 10 ? '0' + hours : hours;
      let minutes = String(date.getMinutes());
      minutes = Number(minutes) < 10 ? '0' + minutes : minutes;

      let dia = String(date.getDate());
      dia = Number(dia) < 10 ? '0' + dia : dia;
      let mes = String(date.getMonth() + 1);
      mes = Number(mes) < 10 ? '0' + mes : mes;
      let ano = date.getFullYear();

      return dia + "/" + mes + "/" + ano + " " + hours + ":" + minutes;
    }
    else return null;
  }

}
