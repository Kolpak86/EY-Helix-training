import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { AlertService } from './alert.service';
import { User } from '../models';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    get currentUserValue() {
        return this.currentUserSubject.value;
    }

    constructor(private user: UserService, private alert: AlertService) {
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    login(username: string, password: string): Observable<boolean> {
        return this.user.getUsers().pipe(
            tap((users) => {
                const user = users.find((us) => us.username === username);
                if (!user) {
                    this.alert.error(`${username} does not exist. Please register!`);
                    throw new Error('Register');
                }
                const authorized = user.password === password;
                if (!authorized) {
                    this.alert.error('Wrong password. Please try again');
                    throw new Error('Wrong password');
                }
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }),
            mapTo(true)
        );
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
