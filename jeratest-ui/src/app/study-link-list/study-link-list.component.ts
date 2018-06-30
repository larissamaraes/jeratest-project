import { Component } from '@angular/core';
import { StudyLinkService } from '../service/study-link.service';
import {MatTableDataSource} from '@angular/material';
import { StudyLink } from '../model/study-link.model';

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

    constructor(private studyLinkService: StudyLinkService) {

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

    applyFilter(filterValue: String) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
