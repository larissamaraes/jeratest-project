import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatListModule,
    MatFormFieldModule, MatChipsModule, MatTabsModule, MatSnackBarModule, MatIconModule, MatTableModule, MatMenuModule, MatDialogModule } from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule,MatTableModule, MatDialogModule,
        MatCardModule, MatFormFieldModule, MatChipsModule, MatTabsModule, MatSnackBarModule, MatIconModule, MatMenuModule, MatListModule],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatTableModule, MatDialogModule,
        MatCardModule, MatFormFieldModule, MatChipsModule, MatTabsModule, MatSnackBarModule, MatIconModule, MatMenuModule, MatListModule]

})

export class MaterialModule{ }