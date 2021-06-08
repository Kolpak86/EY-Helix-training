import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterFormComponent } from 'kolpak0860-register-form';
import { Subscription } from 'rxjs';
import { LoginFormValues, RegisterFormValues, Adhar } from '../../models';
import { UserService } from '../../services/user.service';
import { UniqueAdharValidator } from '../../utility';
import { LoginFormComponent } from '../login/login-form/login-form.component';
import { AdharInputComponent } from './adhar-input/adhar-input.component';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styles: [
        `
            :host {
                width: 100%;
            }
            }
        `,
        `
            .adhar-error {
                position: relative;
                top: -10px;
                font-size: 13px;
                color: #dc3545;
            }
        `,
    ],
})
export class RegisterComponent implements OnDestroy, OnInit {
    @ViewChild(LoginFormComponent, { static: false }) private loginComp: LoginFormComponent;
    @ViewChild(RegisterFormComponent, { static: false }) private registerComp: RegisterFormComponent;
    @ViewChild(AdharInputComponent, { static: false }) private adharComp: AdharInputComponent;

    signupForm: FormGroup;

    private subscription = new Subscription();

    get adharControl() {
        return this.signupForm.controls.adhar;
    }

    get loginValue(): LoginFormValues {
        return this.signupForm.value.login;
    }

    get registerValue(): RegisterFormValues {
        return this.signupForm.value.register;
    }

    get adharValue(): Adhar {
        return this.signupForm.value.adhar;
    }

    constructor(private user: UserService, private router: Router, private fb: FormBuilder, private adharValidator: UniqueAdharValidator) {}

    ngOnInit(): void {
        this.signupForm = this.fb.group({
            login: [],
            register: [],
            adhar: ['', { asyncValidators: [this.adharValidator.validate.bind(this.adharValidator)], updateOn: 'blur' }],
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onSubmit() {
        this.loginComp.form.markAllAsTouched();
        this.registerComp.form.markAllAsTouched();
        this.adharComp.form.markAllAsTouched();

        if (this.signupForm.invalid) {
            return;
        }

        this.subscription.add(
            this.user.register({ ...this.loginValue, ...this.registerValue, ...this.adharValue }).subscribe(() => {
                this.router.navigate(['/login'], { queryParams: { registered: true } });
            })
        );
    }
}
