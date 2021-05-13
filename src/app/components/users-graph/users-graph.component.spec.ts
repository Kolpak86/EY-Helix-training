import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedModule } from 'src/app/shared/shared/shared.module';

import { UsersGraphComponent } from './users-graph.component';

describe('UsersGraphComponent', () => {
    let component: UsersGraphComponent;
    let fixture: ComponentFixture<UsersGraphComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UsersGraphComponent],
            imports: [HighchartsChartModule, SharedModule, HttpClientModule, RouterTestingModule.withRoutes([])],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersGraphComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
