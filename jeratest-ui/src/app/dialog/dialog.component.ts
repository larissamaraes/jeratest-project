import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';
import { StudyLink } from '../model/study-link.model';


@Component({
    selector   : 'app-dialog',
    templateUrl: 'dialog.component.html'
})
export class DialogComponent implements OnInit
{

    public studyLink : StudyLink;
    displayedColumns: any;
    dataSource: any;

    constructor(public dialogRef: MatDialogRef<DialogComponent>)
    {
    }

    ngOnInit()
    {
    
    }
}

