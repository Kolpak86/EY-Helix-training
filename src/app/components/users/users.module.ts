import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
    declarations: [UsersComponent],
    imports: [CommonModule, UsersRoutingModule, AgGridModule.withComponents([])],
})
export class UsersModule {}
