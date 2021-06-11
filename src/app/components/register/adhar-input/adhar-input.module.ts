import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdharInputComponent } from './adhar-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AdharInputComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [AdharInputComponent],
})
export class AdharInputModule {}
