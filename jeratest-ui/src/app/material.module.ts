import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, 
    MatFormFieldModule, MatChipsModule, MatTabsModule } from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, 
        MatCardModule, MatFormFieldModule, MatChipsModule, MatTabsModule],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, 
        MatCardModule, MatFormFieldModule, MatChipsModule, MatTabsModule]

})

export class MaterialModule{ }