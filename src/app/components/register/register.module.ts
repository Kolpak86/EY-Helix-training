import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterFormModule } from 'kolpak0860-register-form';
import { LoginFormModule } from '../login/login-form/login-form.module';
import { AdharInputModule } from './adhar-input/adhar-input.module';

@NgModule({
    declarations: [RegisterComponent, RegisterFormComponent],
    imports: [CommonModule, RegisterRoutingModule, ReactiveFormsModule, RegisterFormModule, LoginFormModule, AdharInputModule],
})
export class RegisterModule {}
