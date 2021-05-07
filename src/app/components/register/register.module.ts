import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
    declarations: [RegisterComponent, RegisterFormComponent],
    imports: [CommonModule, RegisterRoutingModule, ReactiveFormsModule],
})
export class RegisterModule {}
