import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from  './toolbar/toolbar.component';
import { StudyLinkFormComponent } from './study-link-form/study-link-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StudyLinkFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
