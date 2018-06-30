import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from  './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(ToolbarComponent) public toolbar: ToolbarComponent;

  saveArticle: boolean = true;
  listArticles: boolean = false;

  onSavePage(){
    this.saveArticle = true;
    this.listArticles = false;
  }

  onListPage(){
    this.saveArticle = false;
    this.listArticles = true;
  }
}
