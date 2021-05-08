import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterFormModule } from 'kolpak0860-register-form';

@NgModule({
    declarations: [RegisterComponent, RegisterFormComponent],
    imports: [CommonModule, RegisterRoutingModule, ReactiveFormsModule, RegisterFormModule],
})
export class RegisterModule {}
