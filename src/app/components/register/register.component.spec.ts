import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterFormModule } from 'kolpak0860-register-form';
import { LoginFormModule } from '../login/login-form/login-form.module';
import { AdharInputModule } from './adhar-input/adhar-input.module';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            imports: [
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule.withRoutes([]),
                RegisterFormModule,
                LoginFormModule,
                AdharInputModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
