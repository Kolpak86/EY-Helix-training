import { CdkPortal } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { sleep } from 'src/app/helpers';
import { User } from 'src/app/models';
import { PortalBridgeService } from 'src/app/services/portal-bridge.service';
import { UserService } from 'src/app/services/user.service';
import { amountValueFormatter, reducer } from 'src/app/utility';
import { Widget } from 'src/app/widgets/widget';
import { WIDGET } from 'src/app/widgets/widget.token';

@Component({
    selector: 'app-user-table',
    templateUrl: './user-table.component.html',
    styleUrls: ['./user-table.component.scss'],
    providers: [{ provide: WIDGET, useExisting: UserTableComponent }],
})
export class UserTableComponent implements OnInit, OnDestroy, Widget {
    @ViewChild(CdkPortal, { static: true }) portalContent: CdkPortal;
    isRefreshing = false;
    users: User[];

    columnDefs = [
        { field: 'country', rowGroup: true, hide: true },
        { field: 'firstName' },
        { field: 'lastName' },
        { field: 'username' },
        { field: 'amount', filter: 'agNumberColumnFilter', valueFormatter: amountValueFormatter },
    ];

    defaultColDef: { flex: number; minWidth: number; sortable: boolean; filter: boolean };
    total: number;

    private subscription = new Subscription();
    private gridApi: GridApi;
    private gridColumnApi: ColumnApi;

    constructor(private user: UserService, private portalBridge: PortalBridgeService) {
        this.defaultColDef = {
            flex: 1,
            minWidth: 100,
            sortable: true,
            filter: true,
        };
    }

    ngOnInit() {
        this.portalBridge.setPortal(this.portalContent);
    }

    ngOnDestroy() {
        this.portalContent.detach();
    }

    onGridReady(params: GridReadyEvent) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.subscription.add(
            this.user.getUsers().subscribe((users) => {
                const totalAll = [];
                this.users = users;
                this.gridApi.setRowData(users);
                this.gridApi.forEachNode((rowNode, index) => {
                    if (!rowNode.data) {
                        return;
                    }
                    totalAll.push(rowNode.data.amount);
                });
                this.total = totalAll.reduce(reducer);
            })
        );
    }

    async refresh() {
        this.isRefreshing = true;
        await sleep(2000);
        this.isRefreshing = false;
    }
}
