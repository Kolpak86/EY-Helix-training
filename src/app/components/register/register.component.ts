import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
    registerForm: FormGroup;
    submitted: boolean;

    private subscription = new Subscription();
    constructor(private fb: FormBuilder, private user: UserService, private router: Router) {}

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngOnInit() {
        this.registerForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    get f() {
        return this.registerForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        this.subscription.add(
            this.user.register(this.registerForm.value).subscribe(() => {
                this.router.navigate(['/login'], { queryParams: { registered: true } });
            })
        );
    }
}
