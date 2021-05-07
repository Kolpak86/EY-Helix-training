import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models';
import { UniqueAdharValidator, AdharValidators } from 'src/app/utility';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
})
export class RegisterFormComponent implements OnInit, OnDestroy {
    registerForm: FormGroup;
    submitted: boolean;
    @Output() send = new EventEmitter<User>();

    private subscription = new Subscription();
    constructor(private fb: FormBuilder, private adharValidator: UniqueAdharValidator) {}

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngOnInit() {
        this.registerForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            amount: ['', [Validators.required, Validators.min(20)]],
            country: ['', Validators.required],
            adhar: [
                '',
                {
                    validators: [Validators.required, AdharValidators.twelveDigits],
                    asyncValidators: [this.adharValidator.validate.bind(this.adharValidator)],
                    updateOn: 'blur',
                },
            ],
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
        this.send.emit({ ...this.registerForm.value, createdAt: new Date() });
    }
}
