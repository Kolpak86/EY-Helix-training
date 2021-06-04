import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { PortalModule } from '@angular/cdk/portal';
import { UserTableComponent } from './user-table/user-table.component';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
    declarations: [UsersComponent, UserTableComponent],
    imports: [CommonModule, UsersRoutingModule, AgGridModule.withComponents([]), SharedModule, PortalModule],
})
export class UsersModule {}
