import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersGraphRoutingModule } from './users-graph-routing.module';
import { UsersGraphComponent } from './users-graph.component';


@NgModule({
  declarations: [UsersGraphComponent],
  imports: [
    CommonModule,
    UsersGraphRoutingModule
  ]
})
export class UsersGraphModule { }
