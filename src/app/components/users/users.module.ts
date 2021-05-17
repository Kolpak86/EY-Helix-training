import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { PortalModule } from '@angular/cdk/portal';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
    declarations: [UsersComponent, UserTableComponent],
    imports: [CommonModule, UsersRoutingModule, AgGridModule.withComponents([]), SharedModule, PortalModule],
})
export class UsersModule {}
