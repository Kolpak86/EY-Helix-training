import { Component } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Adhar } from 'src/app/models';
import { AdharValidators, UniqueAdharValidator } from 'src/app/utility';

@Component({
    selector: 'app-adhar-input',
    templateUrl: './adhar-input.component.html',
    styleUrls: ['./adhar-input.component.scss'],
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: AdharInputComponent, multi: true },
        { provide: NG_VALIDATORS, useExisting: AdharInputComponent, multi: true },
    ],
})
export class AdharInputComponent implements ControlValueAccessor {
    form: FormGroup;
    subscriptions = new Subscription();

    get value(): Adhar {
        return this.form.value;
    }

    set value(value: Adhar) {
        this.form.setValue(value);
        this.onChange(value);
        this.onTouched();
    }

    get adharControl() {
        return this.form.controls.adhar;
    }

    constructor(private fb: FormBuilder, private adharValidator: UniqueAdharValidator) {
        // create the inner form
        this.form = this.fb.group({
            adhar: [
                '',
                {
                    validators: [Validators.required, AdharValidators.twelveDigits],
                    // asyncValidators: [this.adharValidator.validate.bind(this.adharValidator)],
                    // updateOn: 'blur',
                },
            ],
        });

        this.subscriptions.add(
            // any time the inner form changes update the parent of any change
            this.form.valueChanges.subscribe((value: Adhar) => {
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

    writeValue(value: Adhar): void {
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
        return this.form.valid ? null : { adhar: { valid: false } };
    }
}
