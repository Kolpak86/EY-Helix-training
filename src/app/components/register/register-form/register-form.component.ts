import { Component, OnDestroy } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    Validator,
    ControlValueAccessor,
    FormControl,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterFormValues } from 'src/app/models';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: RegisterFormComponent, multi: true },
        { provide: NG_VALIDATORS, useExisting: RegisterFormComponent, multi: true },
    ],
})
export class RegisterFormComponent implements OnDestroy, Validator, ControlValueAccessor {
    form: FormGroup;
    subscriptions = new Subscription();

    get value(): RegisterFormValues {
        return this.form.value;
    }

    set value(value: RegisterFormValues) {
        this.form.setValue(value);
        this.onChange(value);
        this.onTouched();
    }

    get firstNameControl() {
        return this.form.controls.firstName;
    }

    get lastNameControl() {
        return this.form.controls.lastName;
    }

    get amountControl() {
        return this.form.controls.amount;
    }

    get countryControl() {
        return this.form.controls.country;
    }

    get adharControl() {
        return this.form.controls.adhar;
    }

    constructor(private formBuilder: FormBuilder) {
        // create the inner form
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            amount: ['', [Validators.required, Validators.min(20)]],
            country: ['', Validators.required],
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

    writeValue(value: RegisterFormValues) {
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
        return this.form.valid ? null : { register: { valid: false } };
    }
}
