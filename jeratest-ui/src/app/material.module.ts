import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, 
    MatFormFieldModule, MatChipsModule, MatTabsModule, MatSnackBarModule, MatIconModule, MatTableModule } from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule,MatTableModule, 
        MatCardModule, MatFormFieldModule, MatChipsModule, MatTabsModule, MatSnackBarModule, MatIconModule],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatTableModule,
        MatCardModule, MatFormFieldModule, MatChipsModule, MatTabsModule, MatSnackBarModule, MatIconModule]

})

export class MaterialModule{ }