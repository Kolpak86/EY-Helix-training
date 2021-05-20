import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AgGridModule } from 'ag-grid-angular';

import { UserTableComponent } from './user-table.component';

describe('UserTableComponent', () => {
    let component: UserTableComponent;
    let fixture: ComponentFixture<UserTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserTableComponent],
            imports: [HttpClientModule, RouterTestingModule.withRoutes([]), AgGridModule.withComponents([])],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
