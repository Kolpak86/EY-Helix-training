import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import 'ag-grid-enterprise';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
    columnDefs = [
        { field: 'country', rowGroup: true, hide: true },
        { field: 'firstName' },
        { field: 'lastName' },
        { field: 'username' },
        { field: 'amount', filter: 'agNumberColumnFilter', valueFormatter: amountValueFormatter },
    ];

    defaultColDef: { flex: number; minWidth: number; sortable: boolean; filter: boolean };
    private subscription = new Subscription();
    private gridApi: any;
    private gridColumnApi: any;

    constructor(private user: UserService) {
        this.defaultColDef = {
            flex: 1,
            minWidth: 100,
            sortable: true,
            filter: true,
        };
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.subscription.add(
            this.user.getUsers().subscribe((users) => {
                params.api.setRowData(users);
            })
        );
    }
}

const amountValueFormatter = (params) => {
    const { value } = params;
    if (!value) {
        return;
    }
    return '$' + value;
};
