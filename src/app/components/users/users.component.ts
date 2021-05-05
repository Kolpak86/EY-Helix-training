import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    columnDefs = [{ field: 'firstName' }, { field: 'lastName' }, { field: 'username' }];
    users$: Observable<User[]>;

    constructor(private user: UserService) {}

    ngOnInit() {
        this.users$ = this.user.getUsers();
    }
}
