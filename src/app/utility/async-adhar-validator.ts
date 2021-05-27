import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../models';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class UniqueAdharValidator implements AsyncValidator {
    constructor(private user: UserService) {}

    validate(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this.user.getUsers().pipe(
            map((users) => {
                const result = users.some(({ adhar }) => adhar === ctrl.value.adhar) ? { uniqueAdhar: true } : null;
                return result;
            }),
            catchError(() => of(null))
        );
    }
}

// the same as UniqueAdharValidator
export function userExistsValidator(user: UserService): AsyncValidatorFn {
    return (ctrl: AbstractControl) => {
        return user.getUsers().pipe(
            map((users: User[]) => {
                return users.some(({ adhar }) => adhar === ctrl.value) ? { uniqueAdhar: true } : null;
            }),
            catchError(() => of(null))
        );
    };
}
