import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HighchartsChartModule } from 'highcharts-angular';

import { MonthGraphComponent } from './month-graph.component';

describe('MonthGraphComponent', () => {
    let component: MonthGraphComponent;
    let fixture: ComponentFixture<MonthGraphComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MonthGraphComponent],
            imports: [HighchartsChartModule, HttpClientModule, RouterTestingModule.withRoutes([])],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MonthGraphComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
