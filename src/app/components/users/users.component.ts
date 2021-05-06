import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';
import 'ag-grid-enterprise';

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
        { field: 'amount', filter: 'agNumberColumnFilter', valueFormatter: amountValueFormatter },
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

const amountValueFormatter = (params) => {
    const { value } = params;
    if (!value) {
        return;
    }
    return '$' + value;
};
