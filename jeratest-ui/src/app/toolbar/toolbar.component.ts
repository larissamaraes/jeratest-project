import {Component,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
})
export class ToolbarComponent {
  @Output() savePage = new EventEmitter();
  @Output() listPage = new EventEmitter();

  onClickSaveArticle(){
    this.savePage.emit();
  }

  onClickListArticles(){
    this.listPage.emit();
  }
}