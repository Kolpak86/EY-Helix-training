import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersGraphRoutingModule } from './users-graph-routing.module';
import { UsersGraphComponent } from './users-graph.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MonthGraphComponent } from './month-graph/month-graph.component';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
    declarations: [UsersGraphComponent, MonthGraphComponent],
    imports: [CommonModule, UsersGraphRoutingModule, HighchartsChartModule, SharedModule],
})
export class UsersGraphModule {}
