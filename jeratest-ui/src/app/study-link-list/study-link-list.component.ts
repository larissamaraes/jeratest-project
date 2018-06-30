import { Component } from '@angular/core';
import { StudyLinkService } from '../service/study-link.service';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { StudyLink } from '../model/study-link.model';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
    selector: 'app-study-link-list',
    styleUrls: ['study-link-list.component.css'],
    templateUrl: 'study-link-list.component.html',
})
export class StudyLinkListComponent {

    studyLinks: StudyLink[];
    studyLinksNotChecked: StudyLink[] = [];
    dataSource;
    displayedColumns: string[] = ['id', 'name', 'date', 'actions'];
    dialogRef: MatDialogRef<DialogComponent>;

    constructor(private studyLinkService: StudyLinkService,
        public dialog: MatDialog) {

        this.studyLinkService.list().subscribe((result) => {
            this.studyLinks = result;
            this.studyLinks.forEach((studyLink) => {
                if (studyLink.checked == false) {
                    this.studyLinksNotChecked.push(studyLink);
                }
            });
            this.dataSource = new MatTableDataSource(this.studyLinksNotChecked);
        });
    }

    onCheckStudyLink(studyLink) {
        studyLink.checked = true;
        this.studyLinkService.update(studyLink).subscribe((result) => {
            var index = this.studyLinksNotChecked.indexOf(studyLink)
            if (index != -1) {
                this.studyLinksNotChecked.splice(index, 1);
            }
            this.dataSource = new MatTableDataSource(this.studyLinksNotChecked);
        });
    }

    onDetails(studyLink){
        this.dialogRef = this.dialog.open(DialogComponent, {});
        this.dialogRef.componentInstance.studyLink = studyLink;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }

    applyFilter(filterValue: String) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
