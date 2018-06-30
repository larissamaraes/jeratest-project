import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, 
    MatFormFieldModule, MatChipsModule, MatTabsModule, MatSnackBarModule, MatIconModule, MatTableModule, MatMenuModule } from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule,MatTableModule, 
        MatCardModule, MatFormFieldModule, MatChipsModule, MatTabsModule, MatSnackBarModule, MatIconModule, MatMenuModule],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatTableModule,
        MatCardModule, MatFormFieldModule, MatChipsModule, MatTabsModule, MatSnackBarModule, MatIconModule, MatMenuModule]

})

export class MaterialModule{ }