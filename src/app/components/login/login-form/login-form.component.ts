import { Component, forwardRef, OnDestroy } from '@angular/core';
import {
    ControlValueAccessor,
    FormBuilder,
    FormControl,
    FormGroup,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    Validator,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginFormValues } from 'src/app/models';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => LoginFormComponent), multi: true },
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => LoginFormComponent), multi: true },
    ],
})
export class LoginFormComponent implements OnDestroy, ControlValueAccessor, Validator {
    form: FormGroup;
    subscriptions = new Subscription();

    get value(): LoginFormValues {
        return this.form.value;
    }

    set value(value: LoginFormValues) {
        this.form.setValue(value);
        this.onChange(value);
        this.onTouched();
    }

    get userNameControl() {
        return this.form.controls.username;
    }

    get passwordControl() {
        return this.form.controls.password;
    }

    constructor(private formBuilder: FormBuilder, private router: Router) {
        // create the inner form
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });

        this.subscriptions.add(
            // any time the inner form changes update the parent of any change
            this.form.valueChanges.subscribe((value) => {
                this.onChange(value);
                this.onTouched();
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

    onChange: any = () => {};
    onTouched: any = () => {};

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    writeValue(value: LoginFormValues) {
        if (value) {
            this.value = value;
        }

        if (value === null) {
            this.form.reset();
        }
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    // communicate the inner form validation to the parent form
    validate(_: FormControl) {
        return this.form.valid ? null : { login: { valid: false } };
    }
}
