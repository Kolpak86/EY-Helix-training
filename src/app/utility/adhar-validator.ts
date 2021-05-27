import { AbstractControl, ValidatorFn } from '@angular/forms';

export class AdharValidators {
    static twelveDigits(control: AbstractControl): any | null {
        return AdharValidators.digits(12)(control);
    }

    static digits(count: number): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const ctrlVal = control.value;
            if (!ctrlVal) {
                return;
            }
            const countValue = ctrlVal.toString().length;
            return countValue === count ? null : { wrongCount: countValue, count };
        };
    }
}
