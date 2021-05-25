import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    currentUser: Observable<boolean>;

    constructor(private authentication: AuthenticationService, private router: Router) {}

    ngOnInit() {
        this.currentUser = this.authentication.currentUser.pipe(map((us) => !!us));
    }

    logout() {
        this.authentication.logout();
        this.router.navigate(['/login']);
    }
}
