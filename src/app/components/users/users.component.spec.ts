import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from '../../shared/shared/shared.module';

import { UsersComponent } from './users.component';

@Component({ selector: 'app-user-table', template: '' })
export class UserTableComponent {}

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UsersComponent, UserTableComponent],
            imports: [AgGridModule.withComponents([]), HttpClientModule, RouterTestingModule.withRoutes([]), SharedModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
