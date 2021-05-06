import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
    loginForm: FormGroup;
    submitted: boolean;
    private returnUrl: string;
    private subscription = new Subscription();

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authentication: AuthentificationService,
        private route: ActivatedRoute
    ) {}

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });

        this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/users';
    }

    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.subscription.add(
            this.authentication.login(this.f.username.value, this.f.password.value).subscribe((data) => {
                this.router.navigate([this.returnUrl]);
            })
        );
    }
}
