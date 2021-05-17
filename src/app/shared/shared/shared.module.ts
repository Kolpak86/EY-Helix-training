import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from 'src/app/helpers';
import { WrapperComponent } from 'src/app/components/wrapper/wrapper.component';

@NgModule({
    declarations: [TotalPipe, WrapperComponent],
    imports: [CommonModule],
    exports: [TotalPipe, WrapperComponent],
})
export class SharedModule {}
