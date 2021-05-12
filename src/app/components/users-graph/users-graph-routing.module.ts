import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersGraphComponent } from './users-graph.component';

const routes: Routes = [{ path: '', component: UsersGraphComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersGraphRoutingModule { }
