import { Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-register',
    template: '<app-register-form (send)="onSubmit($event)"></app-register-form>',
    styles: [':host{width: 100%;}'],
})
export class RegisterComponent implements OnDestroy {
    registerForm: FormGroup;
    submitted: boolean;

    private subscription = new Subscription();
    constructor(private user: UserService, private router: Router) {}

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onSubmit(user: User) {
        this.subscription.add(
            this.user.register(user).subscribe(() => {
                this.router.navigate(['/login'], { queryParams: { registered: true } });
            })
        );
    }
}
