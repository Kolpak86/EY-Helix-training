import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from 'src/app/helpers';

@NgModule({
    declarations: [TotalPipe],
    imports: [CommonModule],
    exports: [TotalPipe],
})
export class SharedModule {}
