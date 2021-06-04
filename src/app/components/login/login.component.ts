import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginFormValues } from '../../models';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
    @ViewChild(LoginFormComponent, { static: false }) private loginFormComp: LoginFormComponent;
    loginForm: FormGroup;
    private returnUrl: string;
    private subscription = new Subscription();

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authentication: AuthenticationService,
        private route: ActivatedRoute
    ) {}

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            login: [],
        });

        this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/users';
    }

    get loginFormValue(): LoginFormValues {
        return this.loginForm.value.login;
    }

    onSubmit() {
        this.loginFormComp.form.markAllAsTouched();

        if (this.loginForm.invalid) {
            return;
        }

        this.subscription.add(
            this.authentication.login(this.loginFormValue.username, this.loginFormValue.password).subscribe(() => {
                this.router.navigate([this.returnUrl]);
            })
        );
    }
}
