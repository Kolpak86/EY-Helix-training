import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class UniqueAdharValidator implements AsyncValidator {
    constructor(private user: UserService) {}

    validate(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this.user.getUsers().pipe(
            map((users) => {
                return users.some(({ adhar }) => adhar === ctrl.value) ? { uniqueAdhar: true } : null;
            }),
            catchError(() => of(null))
        );
    }
}
