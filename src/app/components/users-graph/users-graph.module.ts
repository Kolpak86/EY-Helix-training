import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersGraphRoutingModule } from './users-graph-routing.module';
import { UsersGraphComponent } from './users-graph.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
    declarations: [UsersGraphComponent],
    imports: [CommonModule, UsersGraphRoutingModule, HighchartsChartModule],
})
export class UsersGraphModule {}
