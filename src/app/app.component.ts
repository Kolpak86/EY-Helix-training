import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models';
import { AuthentificationService } from './services/authentification.service';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    currentUser: Observable<boolean>;

    constructor(private authentication: AuthentificationService, private roter: Router) {}

    ngOnInit() {
        this.currentUser = this.authentication.currentUser.pipe(map((us) => !!us));
    }

    logout() {
        this.authentication.logout();
        this.roter.navigate(['/login']);
    }
}
