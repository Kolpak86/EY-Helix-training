import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from '../../components/wrapper/wrapper.component';
import { TotalPipe } from '../../helpers';

@NgModule({
    declarations: [TotalPipe, WrapperComponent],
    imports: [CommonModule],
    exports: [TotalPipe, WrapperComponent],
})
export class SharedModule {}
