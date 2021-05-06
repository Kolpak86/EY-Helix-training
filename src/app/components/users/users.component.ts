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
    columnDefs = [
        { field: 'country', rowGroup: true, hide: true },
        { field: 'firstName' },
        { field: 'lastName' },
        { field: 'username' },
        { field: 'amount' },
    ];

    users$: Observable<User[]>;
    defaultColDef: { flex: number; minWidth: number; sortable: boolean; filter: boolean };

    constructor(private user: UserService) {
        this.defaultColDef = {
            flex: 1,
            minWidth: 100,
            sortable: true,
            filter: true,
        };
    }

    ngOnInit() {
        this.users$ = this.user.getUsers();
    }
}
