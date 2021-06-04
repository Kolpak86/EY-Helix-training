import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AlertService } from './alert.service';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient, private alert: AlertService) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(environment.apiUrl);
    }

    register(user: User): Observable<User> {
        return this.getUsers().pipe(
            switchMap((users) => {
                if (users.some(({ username }) => username === user.username)) {
                    this.alert.error(`${user.username} is already used`);
                    throw new Error('User is already exist');
                }
                return this.http.post<User>(environment.apiUrl, user);
            })
        );
    }
}
