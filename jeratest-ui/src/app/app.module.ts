import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from  './toolbar/toolbar.component';
import { StudyLinkFormComponent } from './study-link-form/study-link-form.component';
import { StudyLinkListComponent } from  './study-link-list/study-link-list.component';
import { StudyLinkService } from './service/study-link.service';
import { DialogComponent } from  './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StudyLinkFormComponent,
    StudyLinkListComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StudyLinkService],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
